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
            name={"near_date"}
            placeholder={"Дөхөлт огноо"}
            label="Дөхөлт огноо"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"border_crossing"}
            placeholder={"Орох хил"}
            label="Орох хил"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"arrival_departure"}
            placeholder={"Ирэх/явах"}
            label="Ирэх/явах"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"container_number"}
            placeholder={"Чингэлэг дугаар"}
            label="Чингэлэг дугаар"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"container"}
            placeholder={"Даац"}
            label="Даац"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"broker_name"}
            placeholder={"Зуучийн нэр"}
            label="Зуучийн нэр"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"empty_loaded"}
            placeholder={"Хоосон/Ачаатай"}
            label="Хоосон/Ачаатай"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"whether_sell"}
            placeholder={"Зарах эсэх"}
            label="Зарах эсэх"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"whether_amount"}
            placeholder={"Зарах үнэ"}
            label="Зарах үнэ"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
      </Row>
    </SectionContainer>
  );
};
