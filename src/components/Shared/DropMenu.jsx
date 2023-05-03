import React from "react";
import dotico from "../../assets/dots.svg";
import updateico from "../../assets/edit.svg";
import deleteico from "../../assets/delete.svg";
import { deleteOrg } from "../../axios/axios";

const DropMenu = ({ setToggle, setOrgId, org }) => {
  // console.log("orgid", org._id);
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="m-1">
          <img src={dotico} alt="dot" />
        </label>

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-slate-100 rounded-box w-36 relative"
        >
          {" "}
          <li onClick={() => setOrgId(org._id)}>
            <a
              href="#updateModal"
              className="btn w-fit border-none bg-slate-100 hover:bg-orange-300"
            >
              <img src={updateico} className="w-5" alt="" /> Update
            </a>
          </li>
          <li onClick={() => setOrgId(org._id)}>
            <a
              href="#deleteModal"
              className="btn w-fit border-none bg-slate-100 hover:bg-orange-300"
            >
              <img src={deleteico} className="w-5" alt="deleteico" /> Delete
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropMenu;
