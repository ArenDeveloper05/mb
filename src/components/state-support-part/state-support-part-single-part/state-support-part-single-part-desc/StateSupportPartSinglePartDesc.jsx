const StateSupportPartSinglePartDesc = ({ item }) => {
  return (
    <div className="state-support-single-page-desc">
      <p className="state-support-single-page-desc-date">
        {item.single_date} СМИ о Центре
      </p>

      <p className="state-support-single-page-desc-txt">{item.single_txt1}</p>

      <p className="state-support-single-page-desc-txt">{item.single_txt2}</p>

      <p className="state-support-single-page-desc-txt">{item.single_txt3}</p>

      <p className="state-support-single-page-desc-txt">{item.single_txt4}</p>

      <img
        src={item.single_img}
        alt=""
        className="state-support-single-page-desc-img"
      />

      <p className="state-support-single-page-desc-txt">{item.single_txt5}</p>

      <p className="state-support-single-page-desc-txt">{item.single_txt6}</p>
    </div>
  );
};

export default StateSupportPartSinglePartDesc;
