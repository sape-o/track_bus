import os
import RPi.GPIO as GPIO
import http.client, urllib.parse
os.system("mkdir a")# command line
'''
 Step 0
    Check GPS ด้วยการรับค่าจากมันมาว่า รับได้ไหม
    Check client can ping to server
    Show light { Green : mormal  , Yellow : waiting Connect to server ,RED : GPS fail }
    รอการเชื่อมต่อก่อน ถ้าเชื่อมต่อไม่ได้ อย่าพึ่งไป show สายสีแดง บนจอ
'''

'''
 Step 1
    - request เพื่อ ขอว่า มี Bus scheduler ณ เวลานั้นมีอะไรบ้าง ส่งเป็น json
    - รับค่า จาก server เป็นไฟล์ json แล้วเอาไปใส่ในตัวแปร เพื่อแดง ที่จอ urlencode
        {
            ป้ายไฟ : สายสีแดง ชาย
            เส้นทางหลัก : คือ สายที่รถคันนี้ต้องวิ่ง
            สายเส้นทางรอง : กี่อันก็ว่ากันไป
        }

    - รับค่าจาก ปุ่มกดว่า พนักงาน กดอะไร แล้ว ทำการ request ไฟล์ packet
    - แตกไฟล์ packet ทั้งหมด เข้าไปยัง ระบบ (มี Foder สร้างรอไว้แล้ว)
        - ไฟล์ เสียง mp3 ขนาดน้อยที่สุดเท่าที่จะทำได้
        - json ที่บอกว่า มีสถานีอะไรบ้าง , ละติจุด ลองติจุด
'''



# POST To Server

params = urllib.parse.urlencode({'@user': 'bus1', '@pass': 'bus1', '@action': 'requestpacket'})#content
headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}
conn = http.client.HTTPConnection("bus-sut.com")#web
conn.request("POST", "", params, headers)#POST
response = conn.getresponse()#Respont
print(response.status, response.reason)#print Respont
302 Found
data = response.read()
data
conn.close()
# Post To Server


'''
 Step 2
    - โชว์ป้ายไฟหน้ารถว่า สายอะไร ป้าย วิ่งได้ยิ่งดี ในส่วนนนี้ จะมีอยู่ใน json อยู่แล้ว
    - อ่านค่า จาก sensor แล้ว เช็ก ... คิด Algorithm
        - ส่ง GPS
            - ลติจุด , ลองติจุด , ความเร็ว
        - ส่ง RFID ว่ามีไครติ๊กบ้าง

 ปัญหา
    - gps เสีย ขึ้น สีแดง จบการทำงาน
    - เน็ตหลุด ระบบจะทำการ บันทึกลง .txt เหมื่อระบบกลับมาจะส่งค่ากลับขึ้นไป พร้อมส่ง log เน็ตหลุด
    - ไฟดับ
        - battery สำรอง 15 นาที
        - ระบบจะทำการบันทึกไว้ด้วยว่า ตอนนี้อยู่ที่ state ไหนแล้ว รวมท้ัง database ด้วย
'''


# POST  Location
#latitude
#longitude

# อ่านค่าจาก sensor ซึ่งต้องแปลงออกมาให้สามารถอ่านได้ (มีโค้ดในเว็บ) แล้วเอาไปใส่ในตัวแปร latitude , longitude ,speed

params = urllib.parse.urlencode({'@user': username,
                                '@pass': password,
                                '@latitude': latitude,
                                '@longitude': longitude,
                                '@speed': speed,
                                '@action': 'requestpacket'})#content for send
headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}
conn = http.client.HTTPConnection("bus-sut.com")#web
conn.request("POST", "", params, headers)#POST
response = conn.getresponse()#Respont
print(response.status, response.reason)#print Respont
302 Found
#ถ้าเกิดว่า ส่งไม่ได้ ให้ทำการ บันทึกลงไปใน txt แล้วพอมันกลับมาใหม่ ก็ให้ทำการอัพขึ้นไป
###############

'''
    คิด Algorithm ถ้ามันตรงกับ ข้อมูล ที่อยู่ใน ก้อน json ให้ทำการ ส่งเสียงออกมา และไฟtracking ในรถเปลี่ยนสถานะว่าถึงแล้ว
'''

#อ่านค่าจาก RFID แล้วส่งข้อมูลไปยังเว็บ  แต่ไม่รู้ว่า ข้อมูล RFID เป็นแบบไหน

params = urllib.parse.urlencode({'@user': username,
                                '@pass': password,
                                '@latitude': latitude,
                                '@longitude': longitude,
                                '@speed': speed,
                                '@action': 'requestpacket'})#content for send
headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}
conn = http.client.HTTPConnection("bus-sut.com")#web
conn.request("POST", "", params, headers)#POST
response = conn.getresponse()#Respont
print(response.status, response.reason)#print Respont
302 Found
# ถ้าเกิดว่าไม่ได้ให้ save to txt ไว้แล้วค่อยกลับมาส่งไหม่
##############################################################################################
