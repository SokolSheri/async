import * as d3 from "d3";
import { useEffect } from "react";

export const getStaticPaths = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // const data = await res.json();

  // const paths = data.map((person) => {
  //   return {
  //     params: { id: person.id.toString() },
  //   };
  // });

  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id.toString()}/todos`
  );
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const UserInfo = (props) => {
  let dataArr = [];
  useEffect(() => {
    const falseTodos = props.user.filter((el) => !el.completed);
    const trueTodos = props.user.filter((el) => el.completed);
    dataArr = [falseTodos.length, trueTodos.length];

    const svg = d3
      .select("#putChartHere")
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .style("background", "#f4f4f4");

    svg
      .selectAll("rect")
      .data(dataArr)
      .enter()
      .append("rect")
      .style("fill", "lightblue")
      .style("stroke-width", "3")
      .style("stroke", "black")
      .attr("width", 35)
      .attr("height", 300)
      .attr("x", function (d, i) {
        return i * (35 + 10);
      })
      .attr("y", function (d) {
        return 300 - d * 10;
      });

    alert(`Uncompleted Todos : ${dataArr[0]}, Completed Todos : ${dataArr[1]}`);
  }, []);

  return (
    <>
      <h4>Left Column is uncompleted todos, Right is completed todos</h4>
      <div id="putChartHere"></div>
    </>
  );
};

export default UserInfo;
