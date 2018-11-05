package main

import(
  "github.com/gorilla/mux"


)

func main() {
  userRoute:=mux.NewRouter()

  userRoute.HandleFunc("/user/locationbus",locationbus).Methods("GET")
  userRoute.HandleFunc("/user/chauffeur",chauffeur).Methods("GET")
  userRoute.HandleFunc("/user/station",station).Methods("GET")
  userRoute.HandleFunc("/user/route",route).Methods("GET")
  userRoute.HandleFunc("/user/run",run).Methods("GET")
  //userRoute.HandleFunc("/user/pointstudent",pointstudent).Methods("GET")
  //userRoute.HandleFunc("/user/promotion",promotion).Methods("GET")

}
func locationbus(w http.ResponseWriter, r *http.ResponseWriter) {

}
func chauffeur(w http.ResponseWriter, r *http.ResponseWriter) {

}
func station(w http.ResponseWriter, r *http.ResponseWriter) {

}
func route(w http.ResponseWriter, r *http.ResponseWriter) {

}
func run(w http.ResponseWriter, r *http.ResponseWriter) {

}


/*
 * Get /getlocationall   ค้นหา idlogrun ว่ามี อันใหนที่ status ของ idrun กำลังทำงาน เก็บidlogrun เป็น array
 * ค้นหา database mongidb ที่มี idlogrun ตรงกัน loop หาถ้าเกิดว่า มีหลาย bus  ที่กำลังวิ่ง
 * respont กลับไป ยัง app
 */
/*
 * Get / อื่นๆ
 *
 */
