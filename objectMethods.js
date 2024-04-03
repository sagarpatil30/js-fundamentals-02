const developer = {
  name: "John Doe",
  birthyear:"1993",
  age: 30,
  programming_languages: ["Python", "JavaScript", "Java"],
  experience_years: 8,
  specialization: "Web Development",
  exp:true,

  calcAge: function(){
    console.log(this);
    return 2024 - this.birthyear;
  }
};

console.log(developer.calcAge());