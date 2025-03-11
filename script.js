const original_list = `Bribe : ติดสินบน (v.) สินบน (n.)
Detention : การคุมขัง (n.)
Levy : การเก็บภาษี (n.) จัดเก็บ (v.) 
A great deal : เยอะ มาก (adj.)
Abide : ยอมปฏิบัติตาม (v.)
Abbreviation : การย่อคำ
Jeopardy : อันตราย 
Abound : มีมากมาย ชุกชุม (v.)
Paradigm : เเบบจำลอง ตัวอย่าง (n.)
Hallmark :  เครื่องหมายรับรอง
Damp : ความชื้น ชื้น ทำให้ชื้น
Abolish : เลิกล้ม
Salvage : การกู้ภ้ย กอบกู้
Canvass : การหาเสียง
Eager : ความกระตือรือร้น
Shrewdness : ความเฉลียวฉลาด
Testimonail : หนังสือรับรอง
Shrug off : ไม่เอาใจใส่
Periodic : บางครั้งบางคราว
Omit : ละเว้น ละเลย
Marginalize : ทำให้ไม่สำคัญ
Incline : มีเเนวโน้ม
Legisator : ผู้บัญญัติกฎหมาย
Leisure : เวลาว่าง
Permeate : ซึมผ่าน
Periodical : วารสาร อย่างเป็นครั้งคราว
Inbound : มาถึง
Variation : การเปลี่ยนเเปลง
Shoplifting : การขโมยของตามร้านค้า
Reception : การรับรอง
Pick on : การเหน็บเเนม
Deliberate : ตั้งใจ
Coherent : ซึ่งสอดคล้องกัน
Cold call : โทรศัพท์มาเพื่อขายสินค้า
Delegate : มอบหมายให้ทำเเทน
Persistant : ดื้อดึง
Coalition : สัมพันธมิตร
Cognition : การรับรู้
Harsh : รุนเเรง
Adverse : ไม่พึงประสงค์
Admonish : ตักเตือน 
Acclimate : ปรับตัวให้ชินกับสภาพเเวดล้อม
Carry out : ทำให้สำเร็จ
Handicap : พิการ
Garner : สะสม รวบรวม
Impedec: ขัดขวาง`;

const splitted_line = original_list.split("\n");
let current_number = 0; 
function print_split(){
    let word_text = document.getElementById("word-eng");
    let meaning_text = document.getElementById("meaning");  
    meaning_text.textContent = "";
    meaning_text.style.display = "none";
        let word = splitted_line[current_number].split(":")[0];
        let meaning = splitted_line[current_number].split(":")[1];
        console.log(word, "=",meaning);
       
        word_text.textContent = word;
      
    
}


function add(){
    current_number += 1;
    print_split();

}
function subtract(){
    current_number -= 1;
    print_split();
}
function reveal(){
    let meaning_text = document.getElementById("meaning");  
    let meaning = splitted_line[current_number].split(":")[1];
    meaning_text.textContent = meaning;
    meaning_text.style.display = "block";
}