import { useState, useEffect } from "react";

function Notes() {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // useEffect(() => {
    //     const savedNotes = localStorage.getItem("studyNotes");

    //     if(savedNotes) {
    //         setNotes(JSON.parse(savedNotes));
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("studyNotes", JSON.stringify(notes));
    // }, [notes]);


    useEffect(() => {
        const savedNotes = localStorage.getItem("studyNotes");

        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }

        setIsLoaded(true);
    }, []);


    useEffect(() => {
        if(isLoaded){
            localStorage.setItem("studyNotes", JSON.stringify(notes));
        }
    }, [notes, isLoaded]);

    const addNote = () => {
        if (note.trim() === "") {
            return;
        }

        setNotes([...notes, note]);
        setNote("");
    };

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <div id="notes">
            <h1>Notes</h1>
            <p>Save and manage your study notes.</p>
            <div>
                <input type="text" placeholder="Enter your note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />

                <button onClick={addNote}>Add Note</button>
            </div>

            <div>
                {notes.map((item, index) => (
                    // <p key={index}>{item}</p>

                    <div key={index}>
                        <p>{item}</p>

                        <button onClick={() => deleteNote(index)}>
                            Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notes;