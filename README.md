# Database Name : UniDB

# Collection Name : students

(01) Insert document one data set for students collection.
![01](https://github.com/user-attachments/assets/82927636-c4c5-44b8-bc6b-b07c190331a8)

(02) Insert one data set using db.students.insertOne() query.
![02](https://github.com/user-attachments/assets/fe489dd0-90cf-4a41-9c96-2e5e89ec50d3)

(03) Insert data set using db.studentsMany() query.
![03-1](https://github.com/user-attachments/assets/851e0787-cc37-455e-b3b1-54f8132be7bc)
![03-2](https://github.com/user-attachments/assets/ce5150ad-452f-4fbb-a992-e5e263379b77)

# Updated Data collection.
![04-1](https://github.com/user-attachments/assets/cd0d9089-ab4a-44a5-a4c9-63c150bee074)
![04-2](https://github.com/user-attachments/assets/60391056-e5a4-49f5-aa2a-d01d47f19347)

# db.students.find()
![05-1](https://github.com/user-attachments/assets/e4bcf935-2d55-449e-821b-f35434527d62)
![05-2](https://github.com/user-attachments/assets/ba6c63e0-ba05-40df-b373-7d70a384a8c9)
![05-3](https://github.com/user-attachments/assets/dd21d74f-466e-4b98-9dfc-5f74de769121)

(03) Filter only name and age.

Project --> {name:1,age:1,_id:0}
![06](https://github.com/user-attachments/assets/c610e859-e307-4d27-a392-6f5660878822)

(04) Find the details whose regno is "2021IT001".

{regno:"2021IT001"}
![07](https://github.com/user-attachments/assets/07167b23-723b-420d-9887-ae931ac34705)

shell query:

db.students.find({"regno":"2021IT001"})
![08](https://github.com/user-attachments/assets/0dd61526-5cef-4ea6-88e4-5baadac80bf0)

(05) Find female students details.

{gender:"Female"}
![09](https://github.com/user-attachments/assets/567a00a1-4708-449f-9509-4badeec02b35)

shell query:

db.students.find({gender:"Female"})
![10](https://github.com/user-attachments/assets/c549d8b5-ad77-4112-9129-6d916666c83c)

(06) Find the students whose age is greater than 24.

{age:{$gt:24}}
![11](https://github.com/user-attachments/assets/a60a48ac-f0ba-497c-8721-8bbb1de99751)

shell query:

db.students.find({age:{$gt:24}})
![11-1](https://github.com/user-attachments/assets/ecf17c1e-03cf-4407-8e71-70a464e201c5)

(07) Find the details of students that have skills in "MongoDB".

{skills:{$in:['MongoDB']}}
![12-1](https://github.com/user-attachments/assets/8fdbfcca-42f3-48d7-a372-8118857860f0)

shell query:

db.students.find({skills:{$in:['MongoDB']}})
![11-2](https://github.com/user-attachments/assets/58b8af11-19c9-4bb2-9188-e19d6e7ba502)
![11-3](https://github.com/user-attachments/assets/38386d1b-b99a-43d1-a33f-ead5ba3a7566)

(08) Find the students that have skills in "MongoDB" or "Python".

{skills:{$in:['MongoDB','Python']}}
![13-1](https://github.com/user-attachments/assets/3223ebf8-da19-41a0-a5dc-12bba90ca682)
![13-2](https://github.com/user-attachments/assets/b6bab612-a314-4da0-9c90-76816e9f9847)

shell query:

db.students.find({skills:{$in:['MongoDB','Python']}})
![13-3](https://github.com/user-attachments/assets/a0091516-7819-49b9-9e90-765a2a61d233)
![13-4](https://github.com/user-attachments/assets/355eec79-a072-457d-8948-3653d12ef155)

(09) Find the details of first female student.

shell query:

db.students.findOne({gender:"Female"})
![14](https://github.com/user-attachments/assets/a18914c5-c08f-4e37-9ad4-611b8b3be997)

(10) Sort the details by gpa ascending order.

sort --> {gpa:1}
![15-1](https://github.com/user-attachments/assets/f9094c41-f8de-4267-98a4-8bbf59565401)
![15-2](https://github.com/user-attachments/assets/1abaf71e-1192-478f-a9ae-84b82a2bc16e)

shell query:

db.students.find().sort({gpa:1})
![15-3](https://github.com/user-attachments/assets/fc73b787-db04-475c-9bf7-155044cccb2d)
![15-4](https://github.com/user-attachments/assets/40d2d3f8-7a6c-4d77-97b0-196398ab9999)
![15-5](https://github.com/user-attachments/assets/c4dd286b-b408-4379-a33a-91dc1cb1821e)

(11) Sort the details by gpa descending order.

sort --> {gpa:-1}
![16-1](https://github.com/user-attachments/assets/a70775a0-1b02-4f92-962f-4f8cc37bc679)
![16-2](https://github.com/user-attachments/assets/14d2e7c5-b020-43bb-9665-fb6a42aaccd2)

shell query:

db.students.find().sort({gpa:-1})
![16-3](https://github.com/user-attachments/assets/99ada0eb-b501-461c-a402-395767767ada)
![16-4](https://github.com/user-attachments/assets/c13d04c7-5d96-4b94-b9e4-722f0ba84ead)
![16-5](https://github.com/user-attachments/assets/f1535f97-1ee4-4ab0-b70f-2e8e6e7783ef)

(12) Sort details by GPA and name in ascending order.

sort --> {gpa:1,name:1}
![17-1](https://github.com/user-attachments/assets/58e56f04-d91f-4fb8-91f8-cfa71181f78e)
![17-2](https://github.com/user-attachments/assets/b28795a5-ca97-480f-94eb-40901b600942)

shell query:

db.students.find().sort({gpa:1,name:1})
![17-3](https://github.com/user-attachments/assets/86bf5024-636e-4f8c-a730-182f43b2494f)
![17-4](https://github.com/user-attachments/assets/46ca43f7-dba0-48ee-b001-a17a290bd6e5)
![17-5](https://github.com/user-attachments/assets/6cf37a72-8af0-40a2-a3c8-0c7c228e5aa6)

(13) Sort by gpa ascending order who are stydying "IT" as degree.

query --> {degree:"IT"}

sort--> {gpa:1}
![18-1](https://github.com/user-attachments/assets/10f3708d-23fa-4028-8773-58304ccca250)

shell query:

db.students.find({degree:"IT"}).sort({gpa:1})
![18-2](https://github.com/user-attachments/assets/e90badda-378b-4bf5-abfc-9b4341ac349c)

(14) Sort by gpa ascending order who are stydying "IT" as the degree and gender is "Male".

query --> {degree:"IT",gender:"Male"}

sort--> {gpa:1}
![19](https://github.com/user-attachments/assets/8e91542c-62f7-4a0e-923e-7f809f21abd4)
shell query:

db.students.find({degree:"IT",gender:"Male"}).sort({gpa:1})
![20](https://github.com/user-attachments/assets/d465c744-e14a-4fa2-a0df-d5b76a6a4ae4)



