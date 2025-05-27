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
            name={"account"}
            placeholder={"Данс"}
            label="Данс"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"customer_name"}
            placeholder={"Харилцагчийн нэр"}
            label="Харилцагчийн нэр"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"first_remainder"}
            placeholder={"Эхний үлдэгдэл"}
            label="Эхний үлдэгдэл"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"debit"}
            placeholder={"Дебит"}
            label="Дебит"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"credit"}
            placeholder={"Кредит"}
            label="Кредит"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"last_remainder"}
            placeholder={"Эцсийн үлдэгдэл"}
            label="Эцсийн үлдэгдэл"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
      </Row>
    </SectionContainer>
  );
};
