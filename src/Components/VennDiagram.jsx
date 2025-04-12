import { Stage, Layer, Circle, Text } from "react-konva";

export default function VennChart() {
  return (
    <div className="grid grid-cols-2 items-center p-4">
      <Chart1 />
      <Chart2 />
    </div>
  );
}

function Chart1() {
  return (
    <div className="flex justify-center items-center">
      <Stage width={400} height={400}>
        <Layer>
          <Circle x={200} y={200} radius={100} fill="#1a1a1a" />
          <Text
            x={160}
            y={190}
            text="GIZ"
            fontFamily="Urbanist, sans-serif"
            fontSize={14}
            fill="#fff"
          />

          <Circle x={280} y={120} radius={60} fill="#f5f5d5" />
          <Text
            x={260}
            y={110}
            text="Others"
            fontFamily="Urbanist, sans-serif"
            fontSize={14}
            fill="#000"
          />

          <Circle x={300} y={230} radius={50} fill="#d3e3f4" />
          <Text
            x={280}
            y={230}
            text="Strive"
            fontFamily="Urbanist, sans-serif"
            fontSize={14}
            fill="#000"
          />

          <Circle x={340} y={180} radius={40} fill="#f4c7c3" />
          <Text
            x={320}
            y={175}
            text="CC-Hub"
            fontFamily="Urbanist, sans-serif"
            fontSize={12}
            fill="#000"
          />
        </Layer>
      </Stage>
    </div>
  );
}

function Chart2() {
  return (
    <div>
      <p></p>
    </div>
  );
}
