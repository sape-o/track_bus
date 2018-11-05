/*
 * this is tell something for about func or code
 *
 */
 package main

 import (
  // "encoding/json"
   "github.com/gorilla/mux"
   "log"
   "net/http"
   //"strings"
  // "database/sql"
//   "fmt"
   "io"
 )
 func home(w http.ResponseWriter, r *http.Request) {
   //w.WriteHeader(http.StatusOK)

  // io.WriteString(w, "hello, world\n")
  // fmt.Print("doing func home")
 }

func main() {

  r := mux.NewRouter()
  r.HandleFunc("/",home).Methods("GET")
  //Get  รอบเดินรถทั้งหมดที่มีอยู่ไปให้เป็นไฟล json
  r.HandleFunc("/bus/busGetRunTime/{username}/{now}",BusGetRunTime).Methods("POST")
  //Post SignIn of Bus
  r.HandleFunc("/bus/busSingIn/{username}/{password}",BusSignIn).Methods("POST")
  //Post data form bus about track
  r.HandleFunc("/bus/busTrack/{username}/{latitude}/{longitude}/{id_run}",BusTrack).Methods("POST")
  //Post /buspostpointstudent  รับ idstudent , id_log,เวลา , id_logstation
  r.HandleFunc("/bus/busPostPointStudent/{idstudent}/{id_log}/{time}/{id_logstation}",BusPostPointStudent).Methods("POST")
  http.Handle("/", r)
  log.Fatal(http.ListenAndServe(":8000", r))

}


/*
 * Get /busgetruntime  ส่งข้อมูล รอบเดินรถทั้งหมดที่มีอยู่ไปให้เป็นไฟล json ไปให้  เช็กด้วยว่า username ตรงกับรอบไหนบ้าง แล้วส่ง รอบของ bus คันนั้นไปอันแรกๆ
 *
 */
func BusGetRunTime(w http.ResponseWriter, r *http.Request) {
  vars := mux.Vars(r)
  io.WriteString(w,vars["username"])
  io.WriteString(w,vars["now"])
  //w.WriteHeader(http.StatusOK)
}


/*
 * Post /bussingin รับ username ,password ,id run
 * เช็ก username password ว่าตรงไหม  และ status ของรอบสายนั้นว่า มีรถวิ่งหรือยัง ถ้ายัง update status ว่ามีBusใช้งาน และ save ลง logrun
 * Respont กลับไปด้วยค่า  idLogrun  และ ลิ้ง ไฟล tar.gz
 * ถ้ามีแล้ว ให้ส่งไฟล json รอบรถ ไปไหม่
 */
func BusSignIn(w http.ResponseWriter,r *http.Request) {
  vars := mux.Vars(r)
  io.WriteString(w,vars["username"])
  io.WriteString(w,vars["password"])
  w.WriteHeader(http.StatusOK)
}


/*
 * Post /bustrack รับ username latitude longitude id_run
 * ค้นหา ผ่าน id_run ว่า username ที่ผูกกับ  idrun-run นั้น status กำลังทำงานหรือป่าว
 * save latitude longtitude idrun ลงไปใน mongodb
 */
func BusTrack(w http.ResponseWriter, r *http.Request) {
  vars :=mux.Vars(r)
  io.WriteString(w,vars["username"])
  io.WriteString(w,vars["latitude"])
  io.WriteString(w,vars["longitude"])
  io.WriteString(w,vars["id_run"])
  w.WriteHeader(http.StatusOK)
}


/*
 * Post /buspostpointstudent  รับ idstudent , id_log,เวลา , id_logstation
 * ค้นหา student ค้นหา log แล้ว save point
 * ไม่เจอ respond ่json กลับไป
 */
func BusPostPointStudent(w http.ResponseWriter,r *http.Request) {
  vars := mux.Vars(r)
  io.WriteString(w,vars["idstudent"])
  io.WriteString(w,vars["id_log"])
  io.WriteString(w,vars["time"])
  io.WriteString(w,vars["id_logstation"])
  w.WriteHeader(http.StatusOK)
}





   //
   //  func check_connect_database(){
   //    psqlInfo := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",host,port,user,password,dbname)
   //    db, err := sql.Open("postgres",psqlInfo)
   //    if err != nil {panic(err)}
   //    defer db.Close()
   //   // err = db.Ping()
   //    //if err != nil {panic(err)}
   //    fmt.Println("Successfully connected!")
   //    defer db.Close()
   //   }
   //  func connect_database(){
   //    psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
   //    db, err := sql.Open("postgres", psqlInfo)
   //    if err != nil {panic(err)}
   //    defer db.Close()
   //    }
   //
   //  func send_track_database(firstname int){
   //    psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
   //    db, err := sql.Open("postgres", psqlInfo)
   //    if err != nil {panic(err)}
   //    defer db.Close()
   //   /* err = db.Ping()
   //    if err != nil {panic(err)}
   //    defer db.Close()
   // */
   //   //for i:=0;i<100000000;i++{
   //    sqlStatement := `INSERT INTO friends.test (firstname)VALUES ($1)`
   //    _, err = db.Exec(sqlStatement,firstname)
   //   // fmt.Println("OK Insert")
   // //  }
   //  }
   //  func main(){
   //
   //    check_connect_database()
   //
   //    for i:=0;i<1000000;i++{
   //      send_track_database(32)
   //    }
   //
   //
   //
   //  }
