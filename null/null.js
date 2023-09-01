class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

/// 新增一個 class 為 null pattern
class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "Alice")];
console.log(printUser(1));
console.log(printUser(2));
console.log(printUser(3));

function printUser(id) {
  const user = getUser(id);

  ///  ***** Hi Guest *****
  ///  --------------------------------------------------------
  ///  ❌ bad way : 傳回來的 user 不一定有物件
  //   let name = "Guest";
  //   if (user != null && user.name != null) name = user.name;
  //   console.log("Hello " + name);
  ///  --------------------------------------------------------
  ///  ✅ good way : getUser() 一定有回傳物件
  console.log("Hello " + user.name);

  ///  ***** Hi User *****
  ///  -----------------------------------------------------------------
  ///  ❌ bad way : 需要檢查很多條件，容易忘記檢查
  //   if (user != null && user.hasAccess != null && user.hasAccess()) {
  //     console.log('You have access')
  //   } else {
  //     console.log('You are not allowed here')
  //   }
  ///  -----------------------------------------------------------------
  ///  ✅ good way: 只要檢查是否登入，因為 gerUser() 已經檢查了
  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed");
  }
}

function getUser(id) {
  ///  ❌ bad way : 沒有找到只回傳 undefined
  //   return users.find(user => user.id === id);

  ///  ✅ good way : 不管如何，一定有回傳物件
  const user = users.find(user => user.id === id);
  if (user == null) {
    //  找不到物件，user === undefined
    return new NullUser();
  } else {
    return user;
  }
}
