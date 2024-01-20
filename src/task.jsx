import { useRef, useState } from "react";
const Task = () => {
    let selectAllInput = useRef();
    const [arr, setArr] = useState([
        { id: 1, fname: "mmd", active: false },
        { id: 2, fname: "nima", active: false },
        { id: 3, fname: "mohsen", active: false },
        { id: 4, fname: "soheyl", active: false },
        { id: 5, fname: "hedieh", active: false },
    ]);
    function checked(event) {
        const index = arr.findIndex((obj) => obj.id == event.currentTarget.id);
        setArr(
            [...arr],
            arr[index].active == true
                ? (arr[index].active = false)
                : (arr[index].active = true)
        );
        let trueArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].active) {
                trueArr.push(arr[i].active);
            }
        }
        trueArr.length === 5
            ? (selectAllInput.current.checked = true)
            : (selectAllInput.current.checked = false);
    }
    function giveId() {
        let activeCheckBoxesId = [];
        arr.map((obj) => {
            if (obj.active == true) {
                activeCheckBoxesId.push(obj.id);
            }
        });
        console.log(activeCheckBoxesId);
    }
    function selectAll(event) {
        if (event.currentTarget.checked) {
            setArr(
                [...arr],
                arr.map((obj) => (obj.active = true))
            );
        } else {
            setArr(
                [...arr],
                arr.map((obj) => (obj.active = false))
            );
        }
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                ref={selectAllInput}
                                onClick={selectAll}
                            />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((obj, i) => {
                        return (
                            <tr key={i}>
                                <td>{obj.fname}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        id={obj.id}
                                        onChange={checked}
                                        checked={obj.active}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={giveId}>Delivery of active check boxes</button>
        </>
    );
};

export default Task;
