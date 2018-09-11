const user = {
  firstName: 'Pradeep',
  lastName: 'p',
  address: {
    city: 'Bangalore',
    zipCode: 560017,
    currentTime: function () { return new Date() },
    currentTime1: () => { return new Date }
  }
};




let result;

result = user;
result = user.lastName;
result = user['firstName']
result = user.address.city
result = user.address.currentTime1();


console.log(result)


result = {
  "$class": "org.example.basic.FiberProducer",
  "userId": "lenzing",
  "companyName": "Lenzing pvt ltd",
  "tokens": [
    {
      "$class": "org.example.basic.TokenRelationship",
      "token": "resource:org.example.basic.Token#lenzingToken2",
      "dateCommitted": "2018-07-02T09:33:37.358Z",
      "totalTokenAssigned": 1000,
      "outstandingTokenBalance": 900
    },
    {
      "$class": "org.example.basic.TokenRelationship",
      "token": "resource:org.example.basic.Token#lenzingToken3",
      "dateCommitted": "2018-07-02T09:33:37.358Z",
      "totalTokenAssigned": 1000,
      "outstandingTokenBalance": 960
    }
  ]
}


result.tokens.forEach(value => {
  if (value.token.includes('lenzingToken2')) {
    value.totalTokenAssigned = 1111
  }
});

console.log(result.tokens);

let educationArray = {
  "$class": "org.touchstone.basic.Profile",
  "profileId": "profile1",
  "user": "resource:org.touchstone.basic.Enterprise#pradeep@gmail.com",
  "yearsOfExperience": "",
  "education": [
    {
      "$class": "org.touchstone.basic.Education",
      "education_slno": "education1",
      "course": "",
      "institute": "",
      "specialization": "",
      "yearOfPassing": "",
      "score": "",
      "courseType": "FULL_TIME",
      "supportingDocumentLinks": [],
      "validation": {
        "$class": "org.touchstone.basic.Validation",
        "validationBy": "",
        "validationStatus": "VALIDATE",
        "validationType": "MANUAL",
        "validationDate": "",
        "validationEmail": "",
        "validationNote": ""
      }
    },
    {
      "$class": "org.touchstone.basic.Education",
      "education_slno": "education2",
      "course": "",
      "institute": "",
      "specialization": "",
      "yearOfPassing": "",
      "score": "",
      "courseType": "FULL_TIME",
      "supportingDocumentLinks": [],
      "validation": {
        "$class": "org.touchstone.basic.Validation",
        "validationBy": "",
        "validationStatus": "VALIDATE",
        "validationType": "MANUAL",
        "validationDate": "",
        "validationEmail": "",
        "validationNote": ""
      }
    }
  ],
  "certification": [],
  "skills": [],
  "experience": [],
  "projects": []
}

let education= {
  "$class": "org.touchstone.basic.Education",
  "education_slno": "education2",
  "course": "B.E",
  "institute": "Dr Ait",
  "specialization": "Telecom",
  "yearOfPassing": "2018",
  "score": "90%",
  "courseType": "FULL_TIME",
  "supportingDocumentLinks": [],
  "validation": {
    "$class": "org.touchstone.basic.Validation",
    "validationBy": "",
    "validationStatus": "VALIDATE",
    "validationType": "MANUAL",
    "validationDate": "",
    "validationEmail": "",
    "validationNote": ""
  }
};

educationArray.education.forEach(value => {
  if (value.education_slno == education.education_slno) {
    value.course= education.course;
    value.institute=education.institute;
    value.specialization=education.specialization;
    value.yearOfPassing=education.yearOfPassing;
    value.score=education.score;
    value.courseType=education.courseType; 
  }
});

var removeConcept = (concepts, propertyName, propertyValue) => {
  var i = concepts.length;
  while (i--) {
    if (concepts[i]
      && concepts[i].hasOwnProperty(propertyName)
      && (arguments.length > 2 && concepts[i][propertyName] === propertyValue)) {
        concepts.splice(i, 1);
    }
  }
  return concepts;
}


// var removeIndex = result.education.map((val)=> { return val.education_slno; }).indexOf('education1');
// result.education.splice(removeIndex, 1);

//result.education = removeConcept(result.education, 'education_slno', 'education2');


console.log(educationArray)



