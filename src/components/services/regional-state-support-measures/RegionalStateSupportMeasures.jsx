import { Link } from "react-router-dom";
import "./RegionalStateSupportMeasures.scss";

const RegionalStateSupportMeasures = () => {
  return (
    <div className="regional-state-support-measures">
      <Link>
        <div className="regional-state-support-measures-link">
          <p>
            Справочная информация по мерам государственной поддержки субъектам
            промышленности, предусмотренных в 2023 году.
          </p>
          <div className="regional-state-support-measures-link-arrow"></div>
        </div>
      </Link>

      <Link>
        <div className="regional-state-support-measures-link">
          <p>Наличие статуса резидента ТОСЭР в моногородах</p>
          <div className="regional-state-support-measures-link-arrow"></div>
        </div>
      </Link>

      <p>
        Министерство экономики и территориального развития Республики Дагестан.
      </p>

      <Link>
        <div className="regional-state-support-measures-link">
          <p>
            Государственная программа Республики Дагестан «Развитие
            туристско-рекреационного комплекса и народно художественных
            промыслов».
          </p>
          <div className="regional-state-support-measures-link-arrow"></div>
        </div>
      </Link>

      <p>
        Министерство по туризму и народным художественным промыслам Республики
        Дагестан
      </p>

      <Link>
        <div className="regional-state-support-measures-link">
          <p>
            В рамках государственной программы Республики Дагестан «Развитие
            промышленности и повышение ее конкурентоспособности»
          </p>
          <div className="regional-state-support-measures-link-arrow"></div>
        </div>
      </Link>

      <p>
        Меры государственной поддержки субъектов малого и среднего
        предпринимательства в сфере промышленности
      </p>

      <Link>
        <div className="regional-state-support-measures-link">
          <p>8 программ льготного финансирования</p>
          <div className="regional-state-support-measures-link-arrow"></div>
        </div>
      </Link>

      <p>Фонд развития промышленности Республики Дагестан</p>

      <Link>
        <div className="regional-state-support-measures-link">
          <p>
            Налоговые льготы для резидентов и управляющих компаний
            индустриальных (промышленных) парков, базовых организаций и
            резидентов технопарков
          </p>
          <div className="regional-state-support-measures-link-arrow"></div>
        </div>
      </Link>

      <p>Налоговые льготы</p>

      <Link>
        <div className="regional-state-support-measures-link">
          <p>
            Государственная программа Республики Дагестан «Содействие занятости
            населения»
          </p>
          <div className="regional-state-support-measures-link-arrow"></div>
        </div>
      </Link>

      <p>Министерство труда и социального развития Республики Дагестан</p>
    </div>
  );
};

export default RegionalStateSupportMeasures;
