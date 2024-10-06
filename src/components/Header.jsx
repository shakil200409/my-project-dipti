import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav class="bg-blue-600 p-4">
      <div class="container mx-auto">
        <ul class="flex justify-center space-x-4 text-stone-300">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
