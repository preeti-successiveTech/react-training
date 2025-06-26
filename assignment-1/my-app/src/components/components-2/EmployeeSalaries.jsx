"use client";

import { useMemo, useState } from "react";

export default function EmployeeSalaries() {
  const [employee, setEmployee] = useState([
    { name: "Preeti", salary: 20000 },
    { name: "Arpita", salary: 22000 },
    { name: "Amit", salary: 25000 },
    { name: "Vicky", salary: 30000 },
  ]);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  function add() {
    const numericSalary = parseInt(salary, 10);
    if (name.trim() !== "" && !isNaN(numericSalary)) {
      setEmployee([...employee, { name, salary: numericSalary }]);
      setName("");
      setSalary("");
    }
  }

  const averageSalary = useMemo(() => {
    if (employee.length === 0) return 0;
    const total = employee.reduce((sum, emp) => sum + emp.salary, 0);
    return Math.round(total / employee.length);
  }, [employee]);

  // 💡 Inline styles defined as JavaScript objects
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "500px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#fafafa",
      borderRadius: "8px",
      boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      color: "#2c3e50",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
      flex: "1",
    },
    button: {
      padding: "8px 12px",
      backgroundColor: "#3498db",
      border: "none",
      borderRadius: "4px",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
    },
    list: {
      listStyle: "none",
      paddingLeft: 0,
    },
    listItem: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
    },
    average: {
      marginTop: "20px",
      color: "#27ae60",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Employee Salary</h2>
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Enter employee salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          style={styles.input}
        />
        <button onClick={add} style={styles.button}>
          Add Employee
        </button>
      </div>
      <ul style={styles.list}>
        {employee.map((emp, index) => (
          <li key={index} style={styles.listItem}>
            {emp.name} – Rs: {emp.salary}
          </li>
        ))}
      </ul>
      <h3 style={styles.average}>Average Salary: Rs {averageSalary}</h3>
    </div>
  );
}
