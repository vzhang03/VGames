import { useState } from "react";

type ClassFormat = { 
  class_id: string;
  level: string;
  department: string;
  professor: string;
  format: string;
  course_description: string;
}

const mockData: ClassFormat[] = [
  {
    class_id: "CMPU-101",
    level: "100",
    department: "CMPU",
    professor: "Marc Smith",
    format: "Classroom",
    course_description: "Class about something"
  },
  {
    class_id: "CMPU-203",
    level: "200",
    department: "CMPU",
    professor: "Rui Meireles",
    format: "Classroom",
    course_description: "Software Design course covering principles of modularity, abstraction, and object-oriented programming."
  },
  {
    class_id: "CMPU-334",
    level: "300",
    department: "CMPU",
    professor: "Jason Waterman",
    format: "Classroom",
    course_description: "Operating Systems course covering process management, memory allocation, file systems, and concurrency."
  },
  {
    class_id: "POLI-387",
    level: "300",
    department: "POLI",
    professor: "Claire Sagan",
    format: "Seminar",
    course_description: "Political Theories course exploring classical and contemporary political thought."
  }
];

const QuestionOfDay = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClasses, setFilteredClasses] = useState<ClassFormat[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase(); // Normalize input
    setSearchTerm(value);

    if (value === "") {
      setFilteredClasses([]);
      return;
    }

    // Filter class IDs that start with input
    const matches = mockData.filter((cls) => cls.class_id.startsWith(value));
    setFilteredClasses(matches);
  };

  const handleSelect = (classId: string) => {
    setSearchTerm(classId);
    setFilteredClasses([]); // Hide suggestions after selection
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Welcome to QuestionOfDay!</h1>

      <input
        type="text"
        placeholder="Search class ID..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px"
        }}
      />

      {filteredClasses.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, border: "1px solid #ccc", borderRadius: "5px" }}>
          {filteredClasses.map((cls) => (
            <li
              key={cls.class_id}
              onClick={() => handleSelect(cls.class_id)}
              style={{
                padding: "10px",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
                borderBottom: "1px solid #ddd",
                color: "black"
              }}
            >
              {cls.class_id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestionOfDay;
