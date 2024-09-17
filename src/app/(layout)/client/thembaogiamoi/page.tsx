"use client";

import Breadcrumbst from "@/component/Breadcrumbs/Breadcrumbst";
import { Autocomplete, CloseButton, Input, Title } from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { TextInput, Button, Group } from "@mantine/core";

import { NumberInput } from "@mantine/core";
import { Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useRef, useState } from "react";
import {
    IconFileCheck,
    IconFileWord,
    IconPlus,
    IconTrashX,
} from "@tabler/icons-react";
import { Table, Checkbox } from "@mantine/core";
import DanhSachChucNang from "./components/danhsachchucnang";
import ChiPhiThucHien from "./components/chiphithuchien";
import KyThuatCongNghe from "./components/kythuatcongnghe";
import DanhSachChuyenVien from "./components/danhsachchuyenvien";

const arr = [
    { title: "Trang chủ", href: "#" },
    { title: "Danh sách báo giá", href: "#" },
    { title: "Thêm báo giá sản phẩm", href: "#" },
];

export default function ThemBaoGiamoi() {
    const form = useForm({
        validateInputOnBlur: true,
        mode: "uncontrolled",
        // initialValues: {
        //     name: "",
        //     noidungbaogia:"",
        // },
        validate: {
            noidungbaogia: isNotEmpty("Nội dung báo giá không được để trống"),
            tenkhachhang: isNotEmpty("Khách hàng không được để trống"),
            danhxungdoitac: isNotEmpty(
                "Danh xưng đối tác  không được để trống"
            ),
            sanpham: isNotEmpty("Sản phẩm  không được để trống"),
            goisanpham: isNotEmpty("Gói sản phẩm  không được để trống"),
            thoigianthuchien: isNotEmpty(
                " Thời gian thực hiện không được để trống"
            ),
            hieuluc: isNotEmpty(" Hiệu lực không được để trống"),
            thoigianbaohang: isNotEmpty(" Thời gian không được để trống"),
            donvi: isNotEmpty("Đơn vị không được để trống"),
            fax: isNotEmpty("Fax không được để trống"),
            sodt: isNotEmpty("Số điện thoại không được để trống"),
            diachi: isNotEmpty("Địa chỉ không được để trống"),
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
        form.reset();
    };
    return (
        <>
            <div className="my-3">
                <Breadcrumbst ArrBreadcrumb={arr} />
            </div>
            <div className="py-3 px-3 bg-[#339af0] text-white rounded-md my-3 ">
                <Title order={2}>Thêm báo giá sản phẩm</Title>
            </div>
            <div className="py-2 px-2 bg-[#339af0] text-white rounded-md my-3 ">
                <p>Thông tin chung </p>
            </div>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                {/* form Thông tin chung*/}
                <div className=" bg-[#eceef0] p-4 rounded mb-3 ">
                    <div className="mb-3">
                        <div className="text-gray-500">
                            Ngày báo giá:
                            <span className="font-bold text-black">
                                {" "}
                                14g29p 05/09/2024
                            </span>
                        </div>
                    </div>
                    <TextInput
                        label="Nội dung báo giá"
                        placeholder="Nhập nội dung cần báo giá "
                        key={form.key("noidungbaogia")}
                        {...form.getInputProps("noidungbaogia")}
                        withAsterisk
                        className="mr-4"
                    />
                    <div className="flex md:flex-nowrap flex-wrap">
                        <TextInput
                            label="khách hàng"
                            placeholder="Nhập thông tin khách hàng "
                            key={form.key("tenkhachhang")}
                            {...form.getInputProps("tenkhachhang")}
                            withAsterisk
                            style={{ width: "100%" }}
                            className="mr-4"
                        />
                        <Autocomplete
                            label="Danh xưng đối tác"
                            withAsterisk
                            placeholder="Chọn hoặc là nhập danh xưng"
                            data={["Doanh nghiệp", "Trường"]}
                            key={form.key("danhxungdoitac")}
                            {...form.getInputProps("danhxungdoitac")}
                            style={{ width: "100%" }}
                            className="mr-4"
                        />
                    </div>
                </div>
                <div className="py-2 px-2 bg-[#339af0] text-white rounded-md my-3 ">
                    <p className="uppercase">thông tin báo giá</p>
                </div>
                {/* form thông tin báo giá*/}
                <div className=" bg-[#eceef0] p-4 rounded mb-3 flex  md:flex-nowrap flex-wrap">
                    <Select
                        label="Sản phẩm"
                        withAsterisk
                        placeholder="Tùy chọn"
                        data={["React", "Angular", "Vue", "Svelte"]}
                        key={form.key("sanpham")}
                        {...form.getInputProps("sanpham")}
                        style={{ width: "100%" }}
                        className="mr-4"
                    />{" "}
                    <Select
                        label="Gói sản phẩm"
                        placeholder="Tùy chọn"
                        withAsterisk
                        data={["Cơ bản", "Tiêu chuẩn"]}
                        key={form.key("goisanpham")}
                        {...form.getInputProps("goisanpham")}
                        style={{ width: "100%" }}
                        className="mr-4"
                    />
                    <NumberInput
                        label="Thời gian thực hiện"
                        withAsterisk
                        placeholder="ví dụ: 90"
                        key={form.key("thoigianthuchien")}
                        {...form.getInputProps("thoigianthuchien")}
                        style={{ width: "100%" }}
                        className="mr-4"
                    />
                    <Select
                        label=" "
                        placeholder="Tùy chọn"
                        data={["ngày", "tháng", "năm"]}
                        key={form.key("typetime")}
                        {...form.getInputProps("typetime")}
                        style={{ width: "100%" }}
                        className="mr-4"
                    />
                    <DatePickerInput
                        label="Hiệu lực"
                        placeholder="Tháng/ngày/năm"
                        key={form.key("hieuluc")}
                        {...form.getInputProps("hieuluc")}
                        style={{ width: "100%" }}
                        className="mr-4"
                    />
                </div>
            </form>
            {/* table Danh sách chức năng*/}
            <DanhSachChucNang />
            {/* table Chi phí thực hiện*/}
            <ChiPhiThucHien />
            {/* table Kỹ thuật công nghệ*/}
            <KyThuatCongNghe />
            <div className="py-2 px-2 bg-[#339af0] text-white rounded-md my-3 ">
                <p className="uppercase">thông tin bảo hàng</p>
            </div>{" "}
            <form onSubmit={form.onSubmit(handleSubmit)}>
                {/* form thông tin bảo hàng*/}
                <div className=" bg-[#eceef0] p-4 ">
                    <div className="flex md:flex-nowrap flex-wrap">
                        <NumberInput
                            label="Thời gian"
                            withAsterisk
                            placeholder="ví dụ: 90"
                            key={form.key("thoigianbaohang")}
                            {...form.getInputProps("thoigianbaohang")}
                            className="mr-4 w-[100%] md:w-[20%]"
                        />
                        <Select
                            label=" "
                            placeholder="Tùy chọn"
                            data={["ngày", "tháng", "năm"]}
                            key={form.key("typetimebaohang")}
                            {...form.getInputProps("typetimebaohang")}
                            className="mr-4 w-[100%] md:w-[20%]"
                        />
                        <TextInput
                            label="Đơn vị"
                            placeholder="Nhập thông tin đơn vị "
                            key={form.key("donvi")}
                            {...form.getInputProps("donvi")}
                            withAsterisk
                            className="mr-4 w-[100%] md:w-[70%]"
                        />
                    </div>
                    <div className="flex md:flex-nowrap flex-wrap">
                        <TextInput
                            label="Địa chỉ"
                            placeholder="Nhập thông tin địa chỉ"
                            key={form.key("diachi")}
                            {...form.getInputProps("diachi")}
                            withAsterisk
                            style={{ width: "100%" }}
                            className="mr-4"
                        />
                        <TextInput
                            label="Số điện thoại"
                            placeholder="Nhập thông tin số điện thoại"
                            key={form.key("sodt")}
                            {...form.getInputProps("sodt")}
                            withAsterisk
                            style={{ width: "100%" }}
                            className="mr-4"
                        />

                        <TextInput
                            label="Fax"
                            placeholder="Nhập fax"
                            key={form.key("fax")}
                            {...form.getInputProps("fax")}
                            withAsterisk
                            style={{ width: "100%" }}
                            className="mr-4"
                        />
                    </div>
                </div>
            </form>
            <div className="bg-[#eceef0]  px-4 pb-3 pt-2  mb-3">
                {/* danh sách chuyên viên */}
                <DanhSachChuyenVien />
            </div>
            <div className="mb-3">
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Group justify="center" className="mt-6">
                        <Button variant="outline" color="gray">
                            Hủy bỏ
                        </Button>
                        <Button variant="filled" type="submit" color="green">
                            <IconFileCheck stroke={2} />
                            Lưu báo giá
                        </Button>
                        <Button variant="filled" color="gray">
                            <IconFileWord stroke={2} />
                            Xuất báo giá
                        </Button>
                    </Group>
                </form>
            </div>
            {/* </form> */}
        </>
    );
}
