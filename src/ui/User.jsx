import { useState } from "react";

function User() {
  const [today] = useState(new Date());
  const fomartedDay = today.toLocaleDateString("default", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-center gap-5 text-whi">
      <img
        className="h-11 w-11 rounded-full"
        src="./default-user.jpg"
        alt="users profile"
      />
      <div>
        <p className="text-base">Hello %X%</p>
        <p className="text-2xl">{fomartedDay}</p>
      </div>
    </div>
  );
}

export default User;
