import { useRef, useState } from "react";
const Task = () => {
    let objectInformation = useRef();
    let selectAllInput = useRef();
    const [arr, setArr] = useState([
        { id: 1, fname: "mmd", active: false },
        { id: 2, fname: "nima", active: false },
        { id: 3, fname: "mohsen", active: false },
        { id: 4, fname: "soheyl", active: false },
        { id: 5, fname: "hedieh", active: false },
    ]);
    function checked(event) {
        const newArr = [...arr];
        const index = newArr.findIndex(
            (obj) => obj.id == event.currentTarget.id
        );
        if (newArr[index].active) {
            newArr[index].active = false;
        } else {
            newArr[index].active = true;
        }

        setArr(newArr);
        let trueArr = [];
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].active) {
                trueArr.push(newArr[i].active);
            }
        }
        if (trueArr.length === 5) {
            selectAllInput.current.checked = true;
        } else {
            selectAllInput.current.checked = false;
        }
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
            const newArr = [...arr];
            newArr.map((obj) => (obj.active = true));
            setArr(newArr);
        } else {
            const newArr = [...arr];
            newArr.map((obj) => (obj.active = false));
            setArr(newArr);
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
                <tbody ref={objectInformation}>
                    {arr.map((obj) => {
                        return (
                            <tr>
                                <td>{obj.fname}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        id={obj.id}
                                        onClick={checked}
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
