/*
 * comment  //
 *
 */
 package main

 import (
   "database/sql"
   "fmt"
   _ "github.com/lib/pq"
 )

 const (
   host     = "localhost"
   port     = 5432
   user     = "postgres"
   password = "meroot"
   dbname   = "postgres"
 )
 func check_connect_database(){
   psqlInfo := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",host,port,user,password,dbname)
   db, err := sql.Open("postgres",psqlInfo)
   if err != nil {panic(err)}
   defer db.Close()
  // err = db.Ping()
   //if err != nil {panic(err)}
   fmt.Println("Successfully connected!")
   defer db.Close()
  }
 func connect_database(){
   psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
   db, err := sql.Open("postgres", psqlInfo)
   if err != nil {panic(err)}
   defer db.Close()
   }

 func send_track_database(firstname int){
   psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
   db, err := sql.Open("postgres", psqlInfo)
   if err != nil {panic(err)}
   defer db.Close()
  /* err = db.Ping()
   if err != nil {panic(err)}
   defer db.Close()
*/
  //for i:=0;i<100000000;i++{
   sqlStatement := `INSERT INTO friends.test (firstname)VALUES ($1)`
   _, err = db.Exec(sqlStatement,firstname)
  // fmt.Println("OK Insert")
//  }
 }
 func main(){

   check_connect_database()

   for i:=0;i<1000000;i++{
     send_track_database(32)
   }



 }

 /*
  * https://gist.github.com/alyssaq/75d6678d00572d103106
  * API  Get GPS Track   ลติจุด ลองติจุด ความเร็ว
  * Save to Database
  *
  */

  /*
   *
   *  API Get RFID and Save to database
   *
   */
