import "./plan.css";
import { useRef, useState, useEffect } from "react";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE, fitSelection, zoomOnViewerCenter, fitToViewer } from "react-svg-pan-zoom";
export default function App() {
    const Viewer = useRef(null);
    const [tool, setTool] = useState(TOOL_NONE);
    const [value, setValue] = useState(INITIAL_VALUE);
    const [selected, setSelected] = useState("");
    const handleClick = (filter) => {
        console.log("handleclick");
        setSelected(filter);
    };
    const isActiveRoom = (value) => {
        return "floorplan__room " + (value === selected ? "active" : "");
        // console.log("active room");
    };

    const isActiveList = (value) => {
        return value === selected ? "active" : "";
    };
    useEffect(() => {
        Viewer.current.fitToViewer(100);
    }, []);

    return (
        <div>
            <h1>ReactSVGPanZoom</h1>
            <ul>
                <li onClick={() => handleClick("gravity-0-001")} className={isActiveList("gravity-0-001")}>
                    Procter
                </li>
                <li onClick={() => handleClick("gravity-0-002")} className={isActiveList("gravity-0-002")}>
                    Glen
                </li>
            </ul>
            <ReactSVGPanZoom
                ref={Viewer}
                width={488}
                height={409}
                tool={tool}
                onChangeTool={setTool}
                value={value}
                onChangeValue={setValue}
                detectAutoPan={false}
                // onZoom={(e) => console.log("zoom")}
                // onPan={(e) => console.log("pan")}
                onClick={(event) => console.log("click", event.x, event.y, event.originalEvent)}>
                <svg width={448} height={409}>
                    <image overflow="visible" width={448} height={409} href="https://user-images.githubusercontent.com/34799033/183364197-fd67dc22-1ac6-4aae-a8fe-efa94141af3e.jpg" />
                    <rect
                        onClick={() => {
                            handleClick("gravity-0-001");
                        }}
                        className={isActiveRoom("gravity-0-001")}
                        // gauche
                        x="37"
                        // haut
                        y="72"
                        width="14"
                        height="35"
                    />
                    <rect
                        onClick={() => {
                            handleClick("gravity-0-002");
                        }}
                        className={isActiveRoom("gravity-0-002")}
                        x="37"
                        y="121"
                        width="14"
                        height="22"
                    />

                    <rect
                        onClick={() => {
                            handleClick("gravity-0-003");
                        }}
                        className={isActiveRoom("gravity-0-003")}
                        x="37"
                        y="154"
                        width="14"
                        height="22"
                    />
                </svg>
            </ReactSVGPanZoom>
        </div>
    );
}
