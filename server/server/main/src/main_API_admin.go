package main

import(
  "net/http"
  "github.com/gorilla/mux"
  "log"
)
func main(){
  adminroute:=mux.NewRouter()
  adminroute.HandleFunc("/admin/bus",bus)
  adminroute.HandleFunc("/admin/chauffeur",chauffeur)
  adminroute.HandleFunc("/admin/station",station)
  adminroute.HandleFunc("/admin/route",route)
  adminroute.HandleFunc("/admin/sound",sound)
  adminroute.HandleFunc("/admin/run",run)
  //adminroute.HandleFunc("/admin/student",student)
  //adminroute.HandleFunc("/admin/promotion",promotion)
  http.Handle("/", adminroute)
  log.Fatal(http.ListenAndServe(":8080", adminroute))
}
func bus(w http.ResponseWriter, r *http.Request) {

}
func chauffeur(w http.ResponseWriter, r *http.Request) {

}
func station(w http.ResponseWriter, r *http.Request) {

}
func route(w http.ResponseWriter, r *http.Request) {

}
func sound(w http.ResponseWriter, r *http.Request) {

}
func run(w http.ResponseWriter, r *http.Request) {

}
