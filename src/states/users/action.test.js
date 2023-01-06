/**
 * skenario test
 *
 *    asyncRegisterUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { setSuccessStatusActionCreator } from '../status/action';
import { asyncRegisterUser } from './action';

const fakeRegisterInput = {
  name: 'John Doe',
  email: 'john@example.com',
  password: '123456',
};

const { name, email, password } = fakeRegisterInput;

const fakeRegisterResponse = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._register = api.register;
  });

  afterEach(() => {
    // restore original implementation
    api.register = api._register;

    // delete backup
    delete api._register;
  });

  // test case 1
  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.register = () => Promise.resolve(fakeRegisterResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncRegisterUser({ name, email, password })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setSuccessStatusActionCreator(true));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  // test case 2
  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.register = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert (in this case i use react toastify library)
    toast.error = jest.fn();

    // action
    await asyncRegisterUser({ name, email, password })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
