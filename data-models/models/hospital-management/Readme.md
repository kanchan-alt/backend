### doctormodel


This is a JavaScript code snippet that defines a Mongoose schema for a doctor in a MongoDB database. Let's break down the key components:

1. **Importing Mongoose**: The code starts by importing Mongoose, which is an elegant MongoDB object modeling tool designed to work in an asynchronous environment.

2. **Defining Schema**: The `doctorSchema` variable defines the schema for a doctor. Here are the fields defined in the schema:

   - `name`: A string field representing the name of the doctor. It is required.
   - `salary`: A number field representing the salary of the doctor. It is required.
   - `qualification`: A string field representing the qualification of the doctor. It is required.
   - `experienceInYears`: A number field representing the years of experience of the doctor. It has a default value of 0.
   - `worksInHospitals`: An array of ObjectIds referencing the hospitals where the doctor works. This field uses Mongoose's population feature to reference documents in the 'Hospital' collection.

        `   Using an array for the worksInHospitals field allows for a doctor to work in multiple hospitals. This is a common scenario in healthcare systems where doctors may have affiliations with more than one hospital or medical facility.`

3. **Timestamps**: The schema includes timestamps which will automatically add `createdAt` and `updatedAt` fields to the documents.

4. **Exporting Model**: Finally, the `Doctor` model is created using `mongoose.model()`, which compiles the schema into a Model.

This code provides a structure for defining doctors in a MongoDB database, including their basic information, salary, qualifications, experience, and the hospitals they work in.

### hospital.models.js

The provided code defines a Mongoose schema for a hospital in a MongoDB database. Here's a breakdown of the key components:

1. **Importing Mongoose**: The code begins by importing Mongoose, the MongoDB object modeling tool.

2. **Hospital Schema**: The `hospitalSchema` variable defines the schema for a hospital. Here are the fields defined in the schema:

   - `name`: A string field representing the name of the hospital. It is required.
   - `addressLine1`: The first line of the hospital's address. It is required.
   - `addressLine2`: The second line of the hospital's address. It is required.
   - `city`: A string field representing the city where the hospital is located. It is required.
   - `pincode`: A string field representing the pin code or postal code of the hospital's location. It is required.
   - `specializedIn`: An array of strings representing the areas in which the hospital specializes. This field is not required for every hospital.

3. **Timestamps**: The schema includes timestamps, which automatically add `createdAt` and `updatedAt` fields to the documents.

4. **Exporting Model**: Finally, the `Hospital` model is created using `mongoose.model()`, which compiles the schema into a model.

This schema provides a structure for defining hospitals in a MongoDB database, including their name, address, specialization areas, and timestamps for record-keeping purposes.


### patient.models.js
In the provided code, you're defining a Mongoose schema for a patient in a MongoDB database. Let's break down the key components:

1. **Importing Mongoose**: The code starts by importing Mongoose, the MongoDB object modeling tool.

2. **Patient Schema**: The `patientSchema` variable defines the schema for a patient. Here are the fields defined in the schema:

   - `name`: A string field representing the name of the patient. It is required.
   - `diagnosedWith`: A string field representing the condition the patient has been diagnosed with. It is required.
   - `address`: A string field representing the address of the patient. It is required.
   - `bloodGroup`: A string field representing the blood group of the patient. It is required.
   - `age`: A number field representing the age of the patient. It is required.
   - `gender`: A string field representing the gender of the patient. It is required and constrained to be one of three options: 'M' (Male), 'F' (Female), or 'O' (Other).
   - `admittedIn`: A reference to the hospital where the patient is admitted. It's represented as a MongoDB ObjectId referencing a document in the `Hospital` collection.

3. **Timestamps**: The schema includes timestamps, which automatically add `createdAt` and `updatedAt` fields to the documents.

4. **Exporting Model**: Finally, the `Patient` model is created using `mongoose.model()`, which compiles the schema into a model.

This schema provides a structure for defining patients in a MongoDB database, including their basic information, medical condition, admission details, and timestamps for record-keeping purposes.