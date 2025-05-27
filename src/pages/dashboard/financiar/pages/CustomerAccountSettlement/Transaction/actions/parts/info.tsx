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
            name={"date"}
            placeholder={"Огноо"}
            label="Огноо"
            rules={FORM_ITEM_RULE()}
          />
        </Col>

        <Col span={12}>
          <ProFormText
            name={"account"}
            placeholder={"Данс"}
            label="Данс"
            rules={FORM_ITEM_RULE()}
          />
        </Col>

        <Col span={12}>
          <ProFormText
            name={"ready"}
            placeholder={"Бэлэн"}
            label="Бэлэн"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"not_ready"}
            placeholder={"Бэлэн бус"}
            label="Бэлэн бус"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"receipt"}
            placeholder={"Баримт"}
            label="Баримт   "
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"payer"}
            placeholder={"Төлөгч"}
            label="Төлөгч"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"employee_transaction"}
            placeholder={"Гүйлгээ хийсэн ажилтан"}
            label="Гүйлгээ хийсэн ажилтан"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
      </Row>
    </SectionContainer>
  );
};
