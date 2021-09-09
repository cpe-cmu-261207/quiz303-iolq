import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/handsome.jpg"></img>
            <span className='font-semibold text-lg'>Wipawee Wattanatchariya 630612190</span>
          </div>

          {/* status message */}
          <p>quiz cpe lab ส่วนนี้เขาให้เขียนอะไรตามใจชอบ ไม่รู้จะเขียนอะไร เอาสูตรลาบควายไปละกัน</p>
<p>ส่วนผสม</p>
<p>1. เนื้อควายหรือวัว 300 กรัม</p>
<p>2. เครื่องใน 200 กรัม</p>
<p>3. เลือด 1/2 ถ้วย</p>
<p>4. ผักชี ต้นหอม ผักไผ่ 2 ช้อนโต๊ะ</p>
<p>5. พริกลาบ(ตามความชอบ) 3 ช้อนโต๊ะ</p>
<p>6. เพี้ยต้มสุก แล้วกรองเอาแต่น้ำเพี้ย</p>
<p>ส่วนผสม พริกลาบเหนือ</p>
<p>1.เครื่องเทศ ประกอบด้วย มะแหลบ มะแขว่น เม็ดผักชี ดีปลี พริกไทยดำ</p>
<p>2.ตะไคร้ซอย 3 หัว</p>
<p>3.ข่า 1 ช้อนโต๊ะ</p>
<p>4.พริกแห้ง 24 เม็ด หรือมากกว่านี้ แต่อย่าน้อยกว่านี้ เพราะทำให้กลิ่นของเครื่องเทศมีมากเกินไป</p>
<p>5.กระเทียม 10 กลีบ</p>
<p>6.เกลือ ¼  ช้อนโต๊ะ</p>
<p>วิธีทำ</p>
<p>1.ทำเครื่องเทศนำไปคั่วในกระทะไฟอ่อน ใจเย็นๆคั่วอย่าให้ไหม้ พอมีกลิ่น ตักพักไว้</p>
<p>2.พริกแห้ง นำไปคั่วหรือย่างไฟ พอหอมประมานสีผิวพริกครึ่งดำครึ่งแดง ไม่ถึงกับไหมดำจนเกินไป</p>
<p>3.โขลก กระเทียบ ตะไคร้ซอย เกลือ ข่า ให้ละเอียด ใส่พริก และ เครื่องเทศ ต่างๆ โขลกให้ทุกอย่างละเอียด</p>
<p>เครื่องเคียง</p>
<p>1. ถั่วฝักยาว</p>
<p>2. กระถิน</p>
<p>3. ผักกาดขาว</p>
<p>4. ผักกาดกวางตุ้ง</p>
<p>5. มะเขือเปราะ</p>
<p>6. ยอดมะกอก</p>
<p>7. เล็บครุฑ</p>
<p>วิธีทำ</p>
<p>1.หั่นเนื้อเป็นชิ้นเล็กๆ แล้วสับเนื้อให้ละเอียด</p>
<p>ขณะที่สับให้ใส่เลือดลงสับด้วยทีละน้อยสับจนกระทั่งเนื้อละเอียดและนิ่ม </p>
<p>2.หั่นเครื่องในที่ต้มมสุกเป็นชิ้นบางๆ</p>
<p>3.นำพริกลาบคนผสมกับเลือดที่เหลือ ใส่น้ำเพี้ยคลุกเคล้ากับพริกลาบให้เข้ากัน</p>
<p>4.ใส่เนื้อใส่เครื่องใน ใส่ผักไผ่ซอย และผักชีต้นหอมซอย คลุกเคล้าให้เข้ากัน</p>
<p>5. ปรุงรสตามใจชอบ</p>
<p>cr. อาหารเหนือพื้นบ้าน #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>261207 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">Lisa</p>
              <p>สีท่าจะลำเจ้า</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>999 คน</p>
              </div>
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/puppy.jpg"></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">หมาน้อย</p>
              <p>เม้นค้าบ</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
