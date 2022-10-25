
import { useState } from "react";
import "./App.css";
import datas from "./data.json";

function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    console.log("search", searchTerm);
  };

  return (
    <>
      <div className="container  min-vh-100 py-4">
        <div className="row mt-5">
          <div className="col-md-5 mx-auto">
            <div className="fs-2 fw-bold text-primary text-center pb-3">
              Dev<span className="text-warning">Go</span>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control bg-transparent"
                placeholder="Search"
                value={value}
                onChange={onChange}
              />
              <button className="btn btn-dark" onClick={() => onSearch(value)}>
                Go
              </button>
            </div>
            <div className="dropdown-content mt-0 bg-white p-1 rounded">{
              datas.filter((data)=>{
                const searchTerm=value.toLowerCase();
                const name = data.toLowerCase();
                return searchTerm && name.startsWith(searchTerm) && name !== searchTerm
              }).slice(0,10)
              .map((data)=><div className="list" onClick={()=>onSearch(data)} key={data}>{data}</div>)
            }
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
