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
            placeholder={"Он сар өдөр"}
            label="Он сар өдөр"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"ticket_number"}
            placeholder={"ЭХ тасалбарын №"}
            label="ЭХ тасалбарын №"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"code"}
            placeholder={"Код"}
            label="Код"
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
            name={"fees_amount"}
            placeholder={"Хураамжийн дүн"}
            label="Хураамжийн дүн"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"request_cashier"}
            placeholder={"Хүсэлт явуулсан кассир"}
            label="Хүсэлт явуулсан кассир"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name={"state"}
            placeholder={"Төлөв"}
            label="Төлөв"
            rules={FORM_ITEM_RULE()}
          />
        </Col>
      </Row>
    </SectionContainer>
  );
};
