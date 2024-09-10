import { Button, Spin } from 'antd';

export const chat_hello = `Welcome to BearBuddy AI`; //, your personal shopping assistant 🐻";

export const hello = `👋 บิ๊กซี สวัสดีครับ! ยินดีต้อนรับสู่บิ๊กซีออนไลน์ 🎉
ไม่ว่าคุณจะมองหาสินค้าราคาพิเศษ 📦 หรือกำลังติดปัญหาในการสั่งซื้อ 🛒 ฉันพร้อมช่วยคุณทุกขั้นตอนค่ะ!

🔍 ต้องการค้นหาสินค้า หรือ โปรโมชั่นพิเศษ ไหมคะ?
📦 เช็คสถานะคำสั่งซื้อ ของคุณได้ง่าย ๆ เพียงแค่คลิก!
💳 มีปัญหาในการชำระเงิน หรือ การคืนสินค้า ให้ฉันช่วยได้เลยค่ะ!
✨ ใช้งานง่ายและรวดเร็ว ไม่ต้องห่วง! มาคุยกับฉันได้เลย แล้วคุณจะได้รับการแก้ปัญหาทันใจ 🛍️`;
export const promptTutorial = [
  'มีโปรโมชั่นใดแนะนำบ้าง',
  'แนะนำสินค้าสำหรับการจัดงานวันเกิดลูกสาวอายุ 5 ขวบ',
  'แนะนำสินค้าขายดีในเดือนนี้',
  'ติดตามสถานะคำสั่งซื้อของฉัน',
];
export const buddyHello = 'สวัสดีค่ะ มีอะไรให้น้อง Buddy ช่วยมั้ยคะ?';

export const botMessages = (index: number) => {
  switch (index) {
    case 0:
      return (
        <div>
          <span>👋 บิ๊กซี สวัสดีค่ะ! ยินดีต้อนรับสู่บิ๊กซีออนไลน์ 🎉</span>
          <span>
            ไม่ว่าคุณจะมองหาสินค้าราคาพิเศษ 📦 หรือกำลังติดปัญหาในการสั่งซื้อ 🛒
            ฉันพร้อมช่วยคุณทุกขั้นตอนค่ะ!
          </span>
          <br />
          <br />
          <span>🔍 ต้องการค้นหาสินค้า หรือ โปรโมชั่นพิเศษ ไหมคะ?</span>
          <br />
          <span>📦 เช็คสถานะคำสั่งซื้อ ของคุณได้ง่าย ๆ เพียงแค่คลิก!</span>
          <br />
          <span>💳 มีปัญหาในการชำระเงิน หรือ การคืนสินค้า ให้ฉันช่วยได้เลยค่ะ!</span>
          <br />
          <br />
          <span>
            ✨ ใช้งานง่ายและรวดเร็ว ไม่ต้องห่วง! มาคุยกับฉันได้เลย แล้วคุณจะได้รับการแก้ปัญหาทันใจ
            🛍️
          </span>
        </div>
      );
    case 1:
      return (
        <div>
          <span>🎉 มีสินค้าขายดีในเดือนนี้ที่น่าสนใจมากมาย! มาดูกันเลยค่ะ</span>
          <br />
          <ol className="ml-4 list-decimal">
            <li>
              หมวดหมู่ไข่ นม และผลิตภัณฑ์จากนม:
              <br />
              <strong>ตราหมี น้ำนมโคสเตอริไลส์ แคลเซียมสูง 140 มล. แพ็ค 12</strong>
              <ul className="ml-4 list-disc">
                <li>ราคา 135 บาท</li>
                <a href="https://www.bigc.co.th/product/bear-brand-sterilized-milk-original-formula-140-ml-pack-12.672">
                  <img
                    src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/04/88/8851012010004/8851012010004_1-20240906145427-.jpg"
                    alt="image"
                    className="w-48 rounded-xl"
                  />
                </a>
                <button className="border-1 mt-2 rounded bg-[#93d600] px-2 py-1 duration-300 hover:bg-[#82c500]">
                  + นำสินค้าเข้าตะกร้า
                </button>
              </ul>
            </li>
            <br />

            <li>
              หมวดหมู่ความงามและของใช้ส่วนตัว:
              <br />
              <strong>ซันซิล แชมพู สูตรผมมีน้ำหนัก จัดทรงง่าย 525 มล. แพ็ค 2</strong>
              <ul className="ml-4 list-disc">
                <li>
                  ราคา 198 บาท <strong>ลด 20%</strong>
                </li>
                <a href="https://www.bigc.co.th/product/sunsilk-shampoo-smooth-manageable-525-ml-pack-2.1254993">
                  <img
                    src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/49/88/8851932450249/8851932450249_1-20221202111930-.jpg"
                    alt="image"
                    className="w-48 rounded-xl"
                  />
                </a>
                <button className="border-1 mt-2 rounded bg-[#93d600] px-2 py-1 duration-300 hover:bg-[#82c500]">
                  + นำสินค้าเข้าตะกร้า
                </button>
              </ul>
            </li>
            <br />

            <li>
              หมวดหมู่อาหารสดและเบเกอรี่:
              <br />
              <strong>เซฟคานิเอ็กซ์เพรส ปูอัดสูตร เอ 1 ขนาด 500 ก.</strong>
              <ul className="ml-4 list-disc">
                <li>
                  ราคา 189 บาท <strong>ซื้อ 1 แถม 1</strong>
                </li>
                <a href="https://www.bigc.co.th/product/chef-kani-express-imitation-crab-stick-formula-a1-size-500-g.5917802">
                  <img
                    src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/85/88/8854958006285/8854958006285_1-20240610174823-.jpg"
                    alt="image"
                    className="w-48 rounded-xl"
                  />
                </a>
                <button className="border-1 mt-2 rounded bg-[#93d600] px-2 py-1 duration-300 hover:bg-[#82c500]">
                  + นำสินค้าเข้าตะกร้า
                </button>
              </ul>
            </li>
            <br />
          </ol>
        </div>
      );
    case 2:
      return (
        <div>
          <span>นี่คือโปรโมชั่นสำหรับการซื้ออาหารแมวที่คุณอาจสนใจค่ะ! 🐱✨</span>
          <br />
          <span>
            <strong>โปรโมชั่นอาหารแมว</strong>
          </span>
          <ol className="ml-4 list-decimal">
            <li>
              <span>
                โปรโมชั่น <strong>ซื้อครบ 399.- ลด 30.-</strong>
              </span>
              <ul className="ml-4 list-disc">
                <li>รหัสส่วนลด: SS30</li>
                <li>สิ้นสุด: 31 ธันวาคม 2567</li>
                <li>
                  เมื่อซื้อสินค้าเซซามี่ที่ร่วมรายการครบ 399 บาทขึ้นไป (หลังหักส่วนลด)
                  รับส่วนลดมูลค่า 30 บาท
                </li>
              </ul>
            </li>
            <li>
              <span>
                โปรโมชั่น <strong>ซื้อครบ 600.- ลด 60.-</strong>
              </span>
              <ul className="ml-4 list-disc">
                <li>รหัสส่วนลด: PET60</li>
                <li>วันสิ้นสุด: 18 กันยายน 2567</li>
                <li>
                  รายละเอียด: เมื่อซื้อสินค้ากลุ่มสัตว์เลี้ยงที่ร่วมรายการครบ 600 บาท
                  รับส่วนลดมูลค่า 60 บาท
                </li>
              </ul>
            </li>
            <li>
              <span>
                โปรโมชั่น <strong>ซื้อครบ 499.- ลด 40.-</strong>
              </span>
              <ul className="ml-4 list-disc">
                <li>รหัสส่วนลด: PET40</li>
                <li>วันสิ้นสุด: 18 กันยายน 2567</li>
                <li>
                  รายละเอียด: เมื่อซื้อสินค้ากลุ่มสัตว์เลี้ยงที่ร่วมรายการครบ 499 บาท
                  รับส่วนลดมูลค่า 40 บาท
                </li>
              </ul>
            </li>
          </ol>
          <span>
            หากคุณต้องการสินค้าเฉพาะเจาะจงหรือรายละเอียดเพิ่มเติมเกี่ยวกับโปรโมชั่น
            สามารถบอกได้เลยนะคะ! 😊🎈
          </span>
        </div>
      );
    case 3:
      return (
        <div>
          <span>
            นี่คือรายการสินค้าแนะนำ 5 ชิ้นสำหรับใช้ในการจัดงานเลี้ยงโดยมีผู้เข้าร่วมงาน 10 คนค่ะ
          </span>
          <br />
          <ol className="ml-4 list-decimal">
            <li>
              <strong>แฮปปี้ไพรซ์ จานกระดาษ 9 นิ้ว แพ็ค 50</strong>
              <ul className="ml-4 list-disc">
                <li>ราคา 79 บาท</li>
                <a href="https://www.bigc.co.th/product/happy-price-paper-plate-9-50-ea.72559">
                  <img
                    src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/36/88/8851590106236/8851590106236.jpg"
                    alt="image"
                    className="w-48 rounded-xl"
                  />
                </a>
                <button className="border-1 mt-2 rounded bg-[#93d600] px-2 py-1 duration-300 hover:bg-[#82c500]">
                  + นำสินค้าเข้าตะกร้า
                </button>
              </ul>
            </li>
            <br />

            <li>
              <strong>โค้ก น้ำอัดลม สูตรไม่มีน้ำตาล 1.95 ล. x 6 ชิ้น</strong>
              <ul className="ml-4 list-disc">
                <li>ราคา 229 บาท</li>
                <a href="https://www.bigc.co.th/product/coca-cola-soft-drink-no-sugar-1-95-l-6-bottles-8851959629079.70883">
                  <img
                    src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/79/88/8851959629079/8851959629079_0-20240619110520-.jpg"
                    alt="image"
                    className="w-48 rounded-xl"
                  />
                </a>
                <button className="border-1 mt-2 rounded bg-[#93d600] px-2 py-1 duration-300 hover:bg-[#82c500]">
                  + นำสินค้าเข้าตะกร้า
                </button>
              </ul>
            </li>
            <br />

            <li>
              <strong>เลย์ ร็อค กลิ่นเอ็กซ์ตร้าบาร์บีคิว 69 ก. x 3 ชิ้น</strong>
              <ul className="ml-4 list-disc">
                <li>ราคา 62 บาท</li>
                <a href="https://www.bigc.co.th/product/lays-rock-extra-bbq-69-g-x-3-units.6431049">
                  <img
                    src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/71/88/8850718716371/8850718716371_1-20240801133409-.jpg"
                    alt="image"
                    className="w-48 rounded-xl"
                  />
                </a>
                <button className="border-1 mt-2 rounded bg-[#93d600] px-2 py-1 duration-300 hover:bg-[#82c500]">
                  + นำสินค้าเข้าตะกร้า
                </button>
              </ul>
            </li>
            <br />

            <li>
              <strong>ฮานามิ ข้าวเกรียบกุ้ง รสดั้งเดิม 52 ก. แพ็ค</strong>
              <ul className="ml-4 list-disc">
                <li>
                  ราคา 20 บาท <strong>ลดราคา 75%</strong>
                </li>
                <a href="https://www.bigc.co.th/product/hanami-prawn-crackers-original-flavor-52-g-pack-4.3857813">
                  <img
                    src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/05/88/8852052310505/8852052310505_1-20240612095351-.jpg"
                    alt="image"
                    className="w-48 rounded-xl"
                  />
                </a>
                <button className="border-1 mt-2 rounded bg-[#93d600] px-2 py-1 duration-300 hover:bg-[#82c500]">
                  + นำสินค้าเข้าตะกร้า
                </button>
              </ul>
            </li>
            <br />

            <li>
              <strong>เฟสต้า เบสต้า กระดาษทิชชู่อเนกประสงค์ 90 แผ่น แพ็ค 3</strong>
              <ul className="ml-4 list-disc">
                <li>
                  ราคา 79 บาท <strong>ลดราคา 7%</strong>
                </li>
                <a href="https://www.bigc.co.th/product/festa-mliti-purpose-paper-towels-90-sheets-pack-3.52988">
                  <img
                    src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/41/88/8850456104041/8850456104041_3.jpg"
                    alt="image"
                    className="w-48 rounded-xl"
                  />
                </a>
                <button className="border-1 mt-2 rounded bg-[#93d600] px-2 py-1 duration-300 hover:bg-[#82c500]">
                  + นำสินค้าเข้าตะกร้า
                </button>
              </ul>
            </li>
            <br />
          </ol>

          <span>
            👉 อย่าพลาดโอกาสในการช็อปปิ้งและประหยัดเงินในกระเป๋าของคุณนะคะ!
            หากคุณต้องการข้อมูลเพิ่มเติมเกี่ยวกับสินค้าหรือโปรโมชั่นอื่น ๆ สามารถสอบถามได้เลยค่ะ!
            🛒💖
          </span>
        </div>
      );
    case 4:
      return (
        <div>
          <p>
            <strong>ดาวน์โหลดแอป Big C ได้อย่างไร?</strong>
          </p>
          <p>พิมพ์ในช่องค้นหา “Big C PLUS” ของระบบปฏิบัติการของสมาร์ทโฟนหรือแท็ปแลตของคุณ</p>
          <ul className="ml-4 list-disc">
            <li>iOS - App Store</li>
            <li>Android - Play Store</li>
          </ul>
        </div>
      );
    case 5:
      return (
        <div>
          <p>
            <strong>
              หากต้องการเป็นสมาชิก Big C online ,Big Point และ Big Wallet ต้องใช้ข้อมูลอะไรบ้าง?
            </strong>
          </p>
          <ul className="ml-4 list-disc">
            <li>Big C online ใช้เพียงเบอร์โทรศัพท์มือถือเท่านั้น</li>
            <li>
              Big Point ใช้หมายเลขบัตรประชาชน ชื่อนามสกุล วันเดือนปีเกิด
              และหมายเลขหลังบัตรเพื่อยืนยันตัวตน
            </li>
            <li>Big Wallet ใช้เบอร์โทรศัพท์มือถือ บัตรประชาชน และการยืนยันตัวตนด้วย e-KYC</li>
          </ul>
        </div>
      );
    case 6:
      return (
        <div>
          <p>
            <strong>หากลืมรหัสผ่านต้องทำอย่างไร?</strong>
          </p>
          <p>
            กดลืมรหัสผ่าน จากนั้นกรอกเบอร์โทรศัพท์ที่ใช้สมัครสมาชิก เพื่อยืนยันหมายเลข OTP
            และตั้งรหัสผ่านใหม่
          </p>
        </div>
      );
    case 7:
      return (
        <div>
          <p>
            <strong>หากกรอก OTP ผิดต้องทำอย่างไร?</strong>
          </p>
          <p>
            กดปุ่ม “ส่งรหัส OTP อีกครั้ง” เพื่อขอรับรหัสใหม่ สามารถทำได้สูงสุด 5 ครั้ง
            หากเกินกว่านั้นระบบจะระงับบริการเพื่อความปลอดภัย กรุณารอประมาณ 30
            นาทีและทำรายการใหม่อีกครั้ง
          </p>
        </div>
      );
    case 8:
      return (
        <div>
          <p>
            <strong>วิธีการชำระเงินแอป Big C มีกี่รูปแบบ อะไรบ้าง?</strong>
          </p>
          <p>วิธีการชำระเงินมี 2 รูปแบบหลัก คือ ชำระเงินปลายทาง และ ชำระเงินออนไลน์</p>
          <ol className="list-number ml-4">
            <li>กรณีเลือกชำระเงินปลายทาง (Pay on delivery) ประกอบด้วย</li>
            <ul className="ml-4 list-disc">
              <li>ชำระเงินสดปลายทาง</li>
              <li>ชำระบัตรเครดิต ปลายทาง</li>
              <li>ชำระพร้อมเพย์ ปลายทาง</li>
            </ul>

            <li>กรณีเลือกชำระเงินออนไลน์ (Online payment) ประกอบด้วย</li>
            <ul className="ml-4 list-disc">
              <li>ชำระผ่านบัตรเครดิตบิ๊กซี</li>
              <li>ชำระบัตรเครดิต</li>
              <li>ผ่อนชำระผ่านบัตรเครดิตกสิกรไทย</li>
            </ul>
          </ol>
        </div>
      );
    case 9:
      return (
        <div>
          <p>
            <strong>จะรู้ได้อย่างไร ว่าสินค้าของคุณพร้อมจัดส่ง?</strong>
          </p>
          <p>
            ลูกค้าจะได้รับรายละเอียดคำสั่งซื้อทางอีเมล
            และอาจมีเจ้าหน้าที่จะติดต่อไปยังเบอร์โทรศัพท์ที่ใช้ลงทะเบียนสมาชิก Big C online
            เพื่อยืนยันคำสั่งซื้อของคุณ หากสินค้ามีการเปลี่ยนแปลง
          </p>
        </div>
      );
    case 10:
      return (
        <div>
          <p>
            <strong>หากต้องการเปลี่ยนสินค้า ทำอย่างไรบ้าง?</strong>
          </p>
          <p>
            ต้องเป็นสินค้าที่ซื้อจากบิ๊กซีไฮเปอร์มาร์เก็ต, บิ๊กซีเอ็กซ์ตร้า และบิ๊กซีมาร์เก็ต
            ทุกสาขา ช่องทางออนไลน์ แอปบิ๊กซี พลัส, เว็บไซต์ Big C Online https://www.bigc.co.th/
            และสามารถเปลี่ยนหรือคืนได้เฉพาะสาขาที่สั่งซื้อเท่านั้น และ
            สามารถรับเปลี่ยนหรือคืนสินค้าในระยะเวลาดังต่อไปนี้ โดยนับจากวันที่ในใบเสร็จ
            กรณีไม่มีใบเสร็จให้นับจากวันที่ซื้อสินค้า
          </p>
          <ul className="ml-4 list-disc">
            <li>สินค้าอาหารสด รับเปลี่ยนหรือคืนได้ภายใน 2 วัน</li>
            <li>สินค้ามือถือ แท็บเล็ต คอมพิวเตอร์ รับเปลี่ยนหรือคืนภายใน 7 วัน</li>
            <li>
              สินค้าแผนกไฟฟ้า (ยกเว้นมือถือ, แท็บเล็ต, คอมพิวเตอร์) รับปลี่ยนหรือคืนภายใน 10 วัน
            </li>
            <li>สินค้าทั่วไป รับเปลี่ยนหรือคืนได้ภายใน 30 วัน</li>
            <li>
              สินค้าที่ซื้อโดยใช้วิธีการส่งแบบ parcel จะต้องคืนภายใน 7 วันหลังจากได้รับสินค้า{' '}
            </li>
          </ul>
        </div>
      );
    case 11:
      return (
        <div>
          <p>
            <strong>หากต้องการขอใบกำกับภาษี ต้องทำอย่างไรบ้าง?</strong>
          </p>
          <img
            src="https://st.bigc-cs.com/public/static/media/uploads/2022/12/lp-shopdee-20230101-1-jpg"
            alt="image"
          />
        </div>
      );
    case 12:
      return (
        <div>
          <p>
            <strong>เป็นสมาชิก Big C online และ Big point อยู่แล้ว ต้องสมัครใหม่หรือไม่?</strong>
          </p>
          <p>ไม่ต้องสมัครสมาชิกใหม่ สามารถใช้ข้อมูลสมาชิกเดิมลงชื่อเข้าใช้งานได้ทันที</p>
        </div>
      );
    default:
      return (
        <a
          className="mb-4 flex flex-col justify-center gap-4"
          href="https://udify.app/chat/ZqTUuaaWROZTKA9s"
          target="_blank"
        >
          คลิกเพื่อใช้งานเวอร์ชันเต็มเพื่อความรวดเร็ว
          <Spin />
        </a>
      );
  }
};

export const userMessages = (index: number) => {
  switch (index) {
    case 0:
      return <span>แนะนำสินค้าขายดีในเดือนนี้</span>;
    case 1:
      return <span>อยากซื้ออาหารแมว มีโปรโมชั่นอะไรบ้าง</span>;
    case 2:
      return <span>ขอสินค้า 5 อย่างสำหรับจัดงานเลี้ยง 10 คน</span>;
    case 3:
      return <></>;
  }
};

export const handleSelectBot = (text: string) => {
  if (/ขอ\s?(สินค้า)?\s?5\s?(อย่าง)?/.test(text)) {
    return 3;
  } else if (/แนะนำ\s?(สินค้า)?\s?ขายดี/.test(text)) {
    return 1;
  } else if (/อยาก\s?(ซื้อ)?\s?อาหาร\s?(แมว)?/.test(text)) {
    return 2;
  } else if (/โหลด/.test(text)) {
    return 4;
  } else if (/สมัคร\s?(สมาชิก)?/.test(text)) {
    return 5;
  } else if (/ลืม\s?(รหัสผ่าน)?/.test(text)) {
    return 6;
  } else if (/OTP\s?ผิด/.test(text)) {
    return 7;
  } else if (/วิธีการ\s?(ชำระเงิน)?/.test(text)) {
    return 8;
  } else if (/พร้อม\s?(จัดส่ง)?/.test(text)) {
    return 9;
  } else if (/ต้องการ\s?(เปลี่ยน)?\s?สินค้า/.test(text)) {
    return 10;
  } else if (/ใบ\s?(กำกับ)?\s?ภาษี/.test(text)) {
    return 11;
  } else if (/เป็น\s?สมาชิก.*อยู่แล้ว/.test(text)) {
    return 12;
  } else {
  }
};
