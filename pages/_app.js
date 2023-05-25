import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // const [state, setState] = useState({})
  // const [state1, setState1] = useState({})

  // useEffect(() => {
  //   addEventListener
  //   //тело
  //   return () => {
  //     //функция отчистки
  //     removeEventListener
  //   }
  // }, [state])//массив зависимостей

  // const ref = useRef(null)

  // document.querySelector('a').addEventListener

  // console.log(ref.current)// null

  // useEffect(() => {
  //   console.log(ref.current) // ссылка на header
  // }, [])

  // const test = useMemo(() => ({name: state1}), [state1])

  // const test1 = useCallback(
  //   () => console.log(state1),
  //   [state1],
  // )

  // // const test1 = () => console.log('Test')


  return (
      <div>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            background: "#D6DAE2",
          }}
        >
          <div></div>
          <div
            style={{ display: "flex", gap: "10px" }}
          >
            <Link href="/">Characters</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/episodes">Episodes</Link>
          </div>
        </header>
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
