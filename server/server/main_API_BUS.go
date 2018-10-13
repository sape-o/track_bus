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



 /*
  * Get /busgetruntime  ส่งข้อมูล รอบเดินรถทั้งหมดที่มีอยู่ไปให้เป็นไฟล json ไปให้  เช็กด้วยว่า username ตรงกับรอบไหนบ้าง แล้วส่ง รอบของ bus คันนั้นไปอันแรกๆ
  *
  */


/*
 * Post /bussingin รับ username ,password ,id run
 * เช็ก username password ว่าตรงไหม  และ status ของรอบสายนั้นว่า มีรถวิ่งหรือยัง ถ้ายัง update status ว่ามีBusใช้งาน และ save ลง logrun
 * Respont กลับไปด้วยค่า  idLogrun  และ ลิ้ง ไฟล tar.gz
 * ถ้ามีแล้ว ให้ส่งไฟล json รอบรถ ไปไหม่
 */

/*
 * Post /bustrack รับ username latitude longitude id run
 * ค้นหา ผ่าน id run ว่า username ที่ผูกกับ  idrun-run นั้น status กำลังทำงานหรือป่าว
 * save latitude longtitude idrun ลงไปใน mongodb
 */



/*
 * Post /buspostpointstudent  รับ idstudent , id log,เวลา , id station
 * ค้นหา student ค้นหา log แล้ว save point
 * ไม่เจอ respond ่json กลับไป
 */

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
