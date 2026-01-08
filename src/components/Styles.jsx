export default function Styles({ style, setStyle }) {
    const fonts = [
    {
      name: "Aa",
      value: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    },
    {
      name: "Aa",
      value: "Arial, Helvetica, sans-serif",
    },
    {
      name: "Aa",
      value: "Georgia, 'Times New Roman', serif",
    },
    {
      name: "Aa",
      value: "'Courier New', Courier, monospace",
    },
  ];

  return (
    <section className="styleSection">
        <h2>Customize</h2>
        <h4>Color</h4>
        <input
            type="color"
            id="color"
            value={style.color}
            onChange={(e) =>
            setStyle({ ...style, color: e.target.value })
            }
        />
        <h4>Fonts</h4>
        {fonts.map((font) => (
          <button
            className="btnFont"
            key={font.name}
            onClick={() =>
              setStyle({ ...style, fontFamily: font.value })
            }
            style={{ fontFamily: font.value }}
          >
            {font.name}
          </button>
        ))}
    </section>
  );
}