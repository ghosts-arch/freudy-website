import { SignIn } from "./signIn";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-sm p-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Freudy</a>
      </div>
      <div className="flex none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Demo</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
