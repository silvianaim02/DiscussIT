/** @format */

import React from 'react';
import profileImage from '../image/profileDummy.svg';

function LeaderboardsTable() {
  return (
    <div>
      <table className="table-styled">
        <thead>
          <tr>
            <th>Nama Pengguna</th>
            <th>Skor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="username">
              <img src={profileImage} alt="aaa" />
              <p>Melisa</p>
            </td>
            <td>6000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeaderboardsTable;
