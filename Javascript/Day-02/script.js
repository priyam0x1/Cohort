const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const form = document.querySelector("form");
const users = document.querySelector(".users");
const url = document.querySelector("#url");

let userData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    dob: "2002-04-15",
  },
  {
    id: 2,
    name: "Ananya Das",
    email: "ananya.das@example.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    dob: "2003-08-22",
  },
  //   {
  //     id: 3,
  //     name: "Rohan Mehta",
  //     email: "rohan.mehta@example.com",
  //     image: "https://randomuser.me/api/portraits/men/75.jpg",
  //     dob: "2001-12-10",
  //   },
  //   {
  //     id: 4,
  //     name: "Priya Singh",
  //     email: "priya.singh@example.com",
  //     image: "https://randomuser.me/api/portraits/women/68.jpg",
  //     dob: "2004-02-05",
  //   },
  //   {
  //     id: 5,
  //     name: "Kabir Das",
  //     email: "kabir.das@example.com",
  //     image: "https://randomuser.me/api/portraits/men/52.jpg",
  //     dob: "2002-11-19",
  //   },
];

const ui = () => {
  userData.forEach((elem) => {
    users.innerHTML += `<div class="user_card">
        <div class="img_box">
          <img
            src="${elem.image}"
            alt="image here"
          />
        </div>
        <div class="text">
          <h3>${elem.name}</h3>
          <h3>${elem.email}</h3>
          <h3>${elem.dob}</h3>
        </div>
      </div>`;
  });
};

ui();

form.addEventListener("submit", (event) => {
  users.innerHTML = "";
  event.preventDefault();
  const name = inp1.value;
  const email = inp2.value;
  const imgUrl = url.value;

  if (name === "" || email === "" || imgUrl === "") return;

  userData.push({
    id: 7,
    name: name,
    email: email,
    image: imgUrl,
    dob: "26-02-2007",
  });

  console.log(userData);
  ui();

  form.reset();
});
