import avatar1 from "assets/img/avatars/avatar1.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
import avatar11 from "assets/img/avatars/avatar11.png";

const profilePics = [
  avatar1,
  avatar3,
  avatar4,
  avatar5,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
];
export function randomProfilePic() {
  const randomIndex = Math.floor(Math.random() * profilePics.length);
  return profilePics[randomIndex];
}
