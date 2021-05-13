import React, { useEffect, useRef, useState } from "react";
import Toggle from './Toggle';
import Tag from './Tag';
import Search from './Search';

function List() {
    const [state, setState] = useState({
        error: null,
        isLoaded: false,
        initialItems: [],
        items: []
    })

    useEffect(() => {
        fetch("https://www.hatchways.io/api/assessment/students")
        .then(res => res.json())
        .then(
          (result) => {
            setState({
                ...state,
              isLoaded: true,
              initialItems: result.students,
              items: result.students
            });
          },
          (error) => {
            setState({
                ...state,
              isLoaded: true,
              error
            });
          }
        )
    }, [])

    function average(item){
        let sum = 0
        for (var i=0; i<item.grades.length; i++) {
          sum = sum + Number(item.grades[i])
        }
        return sum/item.grades.length
    }

    function handleChangeByName(e) {
        let currentList = [];
        let newList = [];
    
        if (e.target.value !== "") {
          currentList = state.initialItems;
          newList = currentList.filter(item => {
            const firstName = item.firstName.toLowerCase();
            const lastName = item.lastName.toLowerCase();
            const filter = e.target.value.toLowerCase();
            if (firstName.includes(filter) || lastName.includes(filter)){
              return item;
            }
          });
        } else {
          newList = state.initialItems;
        }
        setState({
            ...state,
          items: newList
        });
    }

    function handleChangeByTags(e) {
        let currentList = [];
        let newList = [];
    
        if (e.target.value !== "") {
          currentList = state.initialItems;
          newList = currentList.filter(item => {
            const tags = item.tags;
            console.log(item, item.tags)
            const filter = e.target.value.toLowerCase();
            if (tags.includes(filter)){
              return item;
            }
          });
        } else {
          newList = this.state.initialItems;
        }
        setState({
            ...state,
          items: newList
        });
    }

    function updateTags(tag, itemKey) {
      console.log(tag, itemKey)
    }

    return (
        <div className="container mx-auto bg-white w-4/5">
          <form className="text-center p-4">
            <Search variant="large" placeholder="Search by name" onChange={handleChangeByName} />
            <Search variant="large" placeholder="Search by tags" onChange={handleChangeByTags} />
          </form>
          <div className="list flex flex-col-reverse divide-y divide-pink-200">
            {state.items.map((item,i) => (
              <div key={i} className="listitem flex flex-row p-4">
                <div className="pic px-10">
                  <img className="w-40" src={item.pic} alt="profile-avatar"/>
                </div>
                <ul className="profile self-center">
                  <li className="name font-semibold">{item.firstName} {item.lastName}</li>
                  <li>Email: {item.email}</li>
                  <li>Company: {item.company}</li>
                  <li>Skill: {item.skill}</li>
                  <li>Average: {average(item)}%</li>
                  <Tag addTags={updateTags} >
                    {i}
                  </Tag>
                  <Toggle>
                      <li className="grades">
                      {item.grades.map((grade, k) => (
                          <div key={k}>Test {grade}</div>
                      ))}
                      </li>
                  </Toggle>
                </ul>
              </div>
            ))}
          </div>
        </div>
    )

}

export default List;