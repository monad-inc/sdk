/*
Monad API

This is the monad API

API version: 1.0
Contact: support@swagger.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monad

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the ParquetParquetFormatter type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ParquetParquetFormatter{}

// ParquetParquetFormatter Configuration for formatting data in Apache Parquet format
type ParquetParquetFormatter struct {
	Schema string `json:"schema"`
}

type _ParquetParquetFormatter ParquetParquetFormatter

// NewParquetParquetFormatter instantiates a new ParquetParquetFormatter object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewParquetParquetFormatter(schema string) *ParquetParquetFormatter {
	this := ParquetParquetFormatter{}
	this.Schema = schema
	return &this
}

// NewParquetParquetFormatterWithDefaults instantiates a new ParquetParquetFormatter object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewParquetParquetFormatterWithDefaults() *ParquetParquetFormatter {
	this := ParquetParquetFormatter{}
	return &this
}

// GetSchema returns the Schema field value
func (o *ParquetParquetFormatter) GetSchema() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Schema
}

// GetSchemaOk returns a tuple with the Schema field value
// and a boolean to check if the value has been set.
func (o *ParquetParquetFormatter) GetSchemaOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Schema, true
}

// SetSchema sets field value
func (o *ParquetParquetFormatter) SetSchema(v string) {
	o.Schema = v
}

func (o ParquetParquetFormatter) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ParquetParquetFormatter) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["schema"] = o.Schema
	return toSerialize, nil
}

func (o *ParquetParquetFormatter) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"schema",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varParquetParquetFormatter := _ParquetParquetFormatter{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varParquetParquetFormatter)

	if err != nil {
		return err
	}

	*o = ParquetParquetFormatter(varParquetParquetFormatter)

	return err
}

type NullableParquetParquetFormatter struct {
	value *ParquetParquetFormatter
	isSet bool
}

func (v NullableParquetParquetFormatter) Get() *ParquetParquetFormatter {
	return v.value
}

func (v *NullableParquetParquetFormatter) Set(val *ParquetParquetFormatter) {
	v.value = val
	v.isSet = true
}

func (v NullableParquetParquetFormatter) IsSet() bool {
	return v.isSet
}

func (v *NullableParquetParquetFormatter) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableParquetParquetFormatter(val *ParquetParquetFormatter) *NullableParquetParquetFormatter {
	return &NullableParquetParquetFormatter{value: val, isSet: true}
}

func (v NullableParquetParquetFormatter) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableParquetParquetFormatter) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


