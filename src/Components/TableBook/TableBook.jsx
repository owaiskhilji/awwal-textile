import { useState, useEffect } from "react";

export default function TableBook() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isPopupClosed = localStorage.getItem("popupClosed");
    if (!isPopupClosed) {
      setShowPopup(true);
    }
  }, []);


  return (
    <>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg font-merriweather">Contact AWWAL Textiles</h3>
    <p className="py-4 font-playfair">We’d love to hear from you! Whether you have questions, want to discuss a custom order, or need more information about our products, feel free to reach out to us.
<br/>
You can email us directly at :
 <span className="cursor-pointer text-blue-600 underline"
>
   awwaltextiles@gmail.com
</span>

    </p>
    <div className="modal-action flex justify-center">
      <form method="dialog">
        <button className=" bg-textcolor text-white w-[300px] p-2 rounded-md">Close</button>
      </form>
    </div>
  </div>
</dialog>



    </>
  );
}
