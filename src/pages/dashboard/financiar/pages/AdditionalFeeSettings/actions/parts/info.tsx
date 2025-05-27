import { ProFormText } from "@ant-design/pro-form";
import { Col, Row } from "antd";
import { SectionContainer } from "components/index";
import { FORM_ITEM_RULE } from "config";
import { FC } from "react";

interface IInfoProps {
  actionName: string;
}
export const Info: FC<IInfoProps> = ({ actionName }) => {
  return (
    <SectionContainer>
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <ProFormText
            name={"class_code"}
            placeholder={"Ангилал код"}
            label="Ангилал  код"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"fees_code"}
            placeholder={"Хураамжийн код"}
            label="Хураамжийн код"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"fees_name"}
            placeholder={"Хураамжийн нэр"}
            label="Хураамжийн нэр"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"unit_measurement"}
            placeholder={"Хэмжих нэгж"}
            label="Хэмжих нэгж"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"fees_amount"}
            placeholder={"Хураамжийн дүн"}
            label="Хураамжийн дүн"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
      </Row>
    </SectionContainer>
  );
};
