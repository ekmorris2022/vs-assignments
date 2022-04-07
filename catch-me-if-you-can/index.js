function sum(x, y){
    //check data types first and throw error
    if(typeof x !== "number" || typeof y !== "number") {
        throw "Not a number"
    }
    return x + y;
}

try {
    sum("1", "2");
} catch(error) {
      console.log(error);
}

const user = {username: "sam", password: "123abc"};
function login(username, password){
    //check credentials
    if(user.username !== username || user.password !== password){
        throw "Invalid username or password"
    }
    console.log("login successful!")
}

try {
    login("sam", "123abc");
} catch (error) {
    console.log(error);
}
  
try {
    login("matt", "123abc");
} catch (error) {
    console.log(error);
}
  