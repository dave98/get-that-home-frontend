import { Formik } from "formik";
import { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine, RiSearchLine, RiUpload2Line } from "react-icons/ri";
import { useIndividualProperty } from "../../contexts/individual-property-context";
import Button from "../Button/button";
import CustomSelect from "../CustomSelect";
import Input from "../Input";
import { CustomInput } from "../MicroComponents";
import CustomRadio from "../MicroComponents/custom-radio";
import CustomText from "../MicroComponents/custom-text";
import { 
    CreatePropertyFormContainer, 
    CreatePropertyFormImageContainer, 
    CreatePropertyFormImageImage, 
    CreatePropertyFormImageImagesContainer, 
    CreatePropertyFormImageInputContainer, 
    CreatePropertyFormImageInputTitle, 
    CreatePropertyFormImageTitle, 
    CreatePropertyFormPetsHelperText, 
    CreatePropertyFormPropertyConfigContainer, 
    CreatePropertyFormTitle, 
    PropertyFormFriendlyImage} from "./style";

export default function CreatePropertyForm(){
    const {createProperty, updateProperty, selected, currentOperation} = useIndividualProperty();
    const initialValues = (function(){
        if(currentOperation == "edit"){
            return {
                operationType: selected.operationType,
                address: selected.address,
                rentAmount: selected.rentAmount,
                maintenance: selected.maintenance,
                propertyType: selected.propertyType,
                bedrooms: selected.bedrooms,
                bathrooms: selected.bathrooms,
                area: selected.area,
                petsAllowed: selected.petsAllowed,
                about: selected.about,
                images: selected.images_url,
            }
        }else{
            return {
                operationType: "rent",
                address: "",
                rentAmount: "",
                maintenance: "",
                propertyType: "",
                bedrooms: 1,
                bathrooms: 1,
                area: 25,
                petsAllowed: null,
                about: "",
                images: [],
            }     
        }
    })();

    const [imagesPreview, setImagesPreview] = useState([]);

    useEffect(() => {
        console.log(selected)
    }, [])

    function validate(values){
        const errors = {};
        console.log(values);
        if(!values.operationType){
            errors.operationType = "A operation type is required";
        }
        if(!values.address){
            errors.address= "❌ An address is required in order to proceed";
        }
        if(!values.rentAmount){
            errors.rentAmount= "❌ A price is required in order to proceed";
        }
        if(!values.maintenance){
            errors.maintenance= "❌ A maintenance cost is required in order to proceed";
        }
        if(!values.propertyType){
            errors.propertyType = "❌ You must select what kind of property you are offering.";
        }
        return errors;
    }

    async function addImages(files){
        let tImagesPreview =  await Promise.all([].map.call(files, function(file){
            return new Promise(function(resolve, reject){
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function(){
                    resolve({result: reader.result, file: file});
                }
            })
            .then(results => {
                return results.result
            })
        }))
        setImagesPreview(tImagesPreview);
    }

    async function handleSubmit(values){
        console.log("Values: ", values);
        const formData = new FormData();
        formData.append("property[operationType]", values.operationType);
        formData.append("property[address]", values.address);
        formData.append("property[rentType]", "monthly");
        formData.append("property[rentAmount]", values.rentAmount);
        formData.append("property[maintenance]", values.maintenance);
        formData.append("property[propertyType]", values.propertyType);
        formData.append("property[bedrooms]", values.bedrooms);
        formData.append("property[bathrooms]", values.bathrooms);
        formData.append("property[area]", values.area );
        formData.append("property[petsAllowed]", !!values.petsAllowed);
        formData.append("property[about]", values.about);
        if(imagesPreview.length){
            if(values.images.length){
                values.images.forEach(i => {
                    formData.append("property[images][]", i, i.name);
                })
            }else{
                formData.append("property[images][]", "")
            }
        }

        if(currentOperation == "create"){
            await createProperty(formData);
        }else{
            await updateProperty(selected.id, formData);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
        >
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched, isValid, setFieldValue}) =>  (
                    <CreatePropertyFormContainer
                        onSubmit={handleSubmit}
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                    >
                        {
                            currentOperation == "create"
                                ? <CreatePropertyFormTitle>Create a property thing</CreatePropertyFormTitle>
                                :  <CreatePropertyFormTitle>Edit a property thing</CreatePropertyFormTitle>
                        }
                        
                        <Input
                            type="text"
                            label="OPERATION TYPE"
                            name="operationType"
                            placeholder={"Operation type"}
                            value={values.operationType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isTouched={touched.operationType}
                            error={errors.operationType}
                        />
                        
                        <CustomInput
                            type="text"
                            label="ADDRESS"
                            name="address"
                            placeholder={"start typing to autocomplete"}
                            icon={ <RiSearchLine size={22}/>}
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isTouched={touched.address}
                            error={errors.address}
                            errorDirection="row"
                        />
                        <CustomInput
                            type="number"
                            label="PRICE"
                            name="rentAmount"
                            placeholder={"2000"}
                            icon={ <RiMoneyDollarCircleLine size={22}/>}
                            value={values.rentAmount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isTouched={touched.rentAmount}
                            error={errors.rentAmount}
                            errorDirection="row" 
                        />
                        <CustomInput
                            type="number"
                            label="MAINTENANCE"
                            name="maintenance"
                            placeholder={"100"}
                            icon={ <RiMoneyDollarCircleLine size={22}/>}
                            value={values.maintenance}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isTouched={touched.maintenance}
                            error={errors.maintenance}
                            errorDirection="row"
                        />
                        <CustomRadio 
                            mainLabel="PROPERTY TYPE"
                            name="propertyType" 
                            labels={["Aparment", "House"]}
                            value={values.propertyType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.propertyType}
                            errorDirection="row"
                        />
                        <CreatePropertyFormPropertyConfigContainer>
                            <CustomSelect 
                                variant={"tropical"} 
                                label={"BEDROOMS"} 
                                name={"bedrooms"} 
                                value={values.bedrooms}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} 
                                width={150}
                            />
                            <CustomSelect 
                                variant={"tropical"} 
                                label={"BATHROOMS"} 
                                name={"bathrooms"} 
                                value={values.bathrooms}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} 
                                width={150}
                            />
                            <Input 
                                type="number"
                                label="AREA IN M2"
                                name="area"
                                placeholder={"180"}
                                value={values.area}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isTouched={touched.area}
                                error={errors.area}
                            />
                        </CreatePropertyFormPropertyConfigContainer>
                        <CreatePropertyFormPetsHelperText>
                            <CustomRadio 
                                name="petsAllowed" 
                                labels={["Pets Allowed"]}
                                value={values.petsAllowed}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p>
                                Allowing pets increase the likehood of renters liking the property by 9001%. It also makes you a better person
                            </p>
                        </CreatePropertyFormPetsHelperText>
                        <CustomText 
                            name="about"
                            label="ABOUT THIS PROPERTY" 
                            placeholder="Mi aparment is great because..."
                            footer="Renters will read this first, so highlight any features or important information the apartment has."
                            value={values.about}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isTouched={touched.about}
                            error={errors.about}
                        />
                        <CreatePropertyFormImageContainer>
                            <CreatePropertyFormImageTitle>Photos</CreatePropertyFormImageTitle>
                            <CreatePropertyFormImageInputContainer>
                                <CreatePropertyFormImageInputTitle>Upload as many photos as you want</CreatePropertyFormImageInputTitle>
                                <CustomInput
                                    name="images"
                                    type="file"
                                    icon={ <RiUpload2Line size={22}/>}
                                    //value={values.images} //
                                    onChange={(event) => {
                                        const files = event.target.files;
                                        let myFiles = Array.from(files);
                                        addImages(myFiles);
                                        setFieldValue("images", myFiles);
                                    }}
                                    onBlur={handleBlur} 
                                    isTouched={touched.images}
                                    error={errors.images}
                                />
                            </CreatePropertyFormImageInputContainer>
                            <CreatePropertyFormImageImagesContainer>
                                    {
                                        imagesPreview.length
                                            ? imagesPreview.map((image, index) => {
                                                return (
                                                    <CreatePropertyFormImageImage key={index} initial={{scale: 0}} animate={{scale: 1}}>
                                                        <PropertyFormFriendlyImage src={image}/>
                                                    </CreatePropertyFormImageImage>
                                                )
                                            })
                                            :  values.images.length
                                            ? values.images.map((image, index) => {
                                                return (
                                                    <CreatePropertyFormImageImage key={index} initial={{scale: 0}} animate={{scale: 1}}>
                                                        <PropertyFormFriendlyImage src={image}/>
                                                    </CreatePropertyFormImageImage>
                                                )
                                            })
                                            : (
                                                <CreatePropertyFormImageImage initial={{scale: 0}} animate={{scale: 1}}>
                                                    <PropertyFormFriendlyImage src="/image-upload-bro.svg"/>
                                                </CreatePropertyFormImageImage>
                                            )
                                    }
                            </CreatePropertyFormImageImagesContainer>
                        </CreatePropertyFormImageContainer>
                        <Button 
                            size="lg" 
                            type="submit"
                            disabled={!isValid}
                        >
                            {currentOperation == "create" ? "PUBLISH PROPERTY LISTING" : "UPDATE PROPERTY" }
                        </Button>
                    </CreatePropertyFormContainer>
                )
            }
        </Formik>
    );
};