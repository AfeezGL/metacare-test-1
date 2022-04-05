import AverageResponseTime from "../components/AverageResponseTime";
import TeamsNav from "../components/TeamsNav";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebase";

const Teams = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const dataRef = collection(db, "data");
      const fetchData = await getDocs(dataRef);
      const data = fetchData.docs.map((chart) => ({
        id: chart.id,
        data: chart.data(),
      }));

      setChartData(data);
    };

    getData();
  }, []);

  return (
    <>
      <TeamsNav />
      <header className="d-flex justify-content-between [ page-header ]">
        <h1 className="d-inline fs-3 [ bold ]">Efficiency analytics</h1>
        <form className=" [ filter-form ]">
          <input type="text" placeholder="Search" />
          <select>
            <option value="none">Filter Options</option>
            <option value="option 1">Option 1</option>
            <option value="option 2">Option 2</option>
            <option value="option 3">Option 3</option>
          </select>
          <input type="submit" value="Export" />
        </form>
      </header>
      <main>
        <AverageResponseTime />
      </main>
    </>
  );
};

export default Teams;
