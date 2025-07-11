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
	"fmt"
	"gopkg.in/validator.v2"
)

// SecretProcessesorOutputConfigSettings - struct for SecretProcessesorOutputConfigSettings
type SecretProcessesorOutputConfigSettings struct {
	AbsSettingsConfig *AbsSettingsConfig
	AwssqsoutputSettingsConfig *AwssqsoutputSettingsConfig
	BigquerySettingsConfig *BigquerySettingsConfig
	CriblHttpSettingsConfig *CriblHttpSettingsConfig
	ElasticsearchSettingsConfig *ElasticsearchSettingsConfig
	GoogleCloudStorageOutputSettingsConfig *GoogleCloudStorageOutputSettingsConfig
	HttpSettingsConfig *HttpSettingsConfig
	NextGenSiemSettingsConfig *NextGenSiemSettingsConfig
	ObjectStorageSettingsConfig *ObjectStorageSettingsConfig
	OpensearchSettingsConfig *OpensearchSettingsConfig
	PagerdutySettingsConfig *PagerdutySettingsConfig
	PostgresqlSettingsConfig *PostgresqlSettingsConfig
	S3SettingsConfig *S3SettingsConfig
	SecurityLakeSettingsConfig *SecurityLakeSettingsConfig
	SentinelSettingsConfig *SentinelSettingsConfig
	SnowflakeOutputSettingsConfig *SnowflakeOutputSettingsConfig
	SplunkSettingsConfig *SplunkSettingsConfig
	SumologicSettingsConfig *SumologicSettingsConfig
	MapmapOfStringAny *map[string]interface{}
}

// AbsSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns AbsSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func AbsSettingsConfigAsSecretProcessesorOutputConfigSettings(v *AbsSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		AbsSettingsConfig: v,
	}
}

// AwssqsoutputSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns AwssqsoutputSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func AwssqsoutputSettingsConfigAsSecretProcessesorOutputConfigSettings(v *AwssqsoutputSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		AwssqsoutputSettingsConfig: v,
	}
}

// BigquerySettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns BigquerySettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func BigquerySettingsConfigAsSecretProcessesorOutputConfigSettings(v *BigquerySettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		BigquerySettingsConfig: v,
	}
}

// CriblHttpSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns CriblHttpSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func CriblHttpSettingsConfigAsSecretProcessesorOutputConfigSettings(v *CriblHttpSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		CriblHttpSettingsConfig: v,
	}
}

// ElasticsearchSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns ElasticsearchSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func ElasticsearchSettingsConfigAsSecretProcessesorOutputConfigSettings(v *ElasticsearchSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		ElasticsearchSettingsConfig: v,
	}
}

// GoogleCloudStorageOutputSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns GoogleCloudStorageOutputSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func GoogleCloudStorageOutputSettingsConfigAsSecretProcessesorOutputConfigSettings(v *GoogleCloudStorageOutputSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		GoogleCloudStorageOutputSettingsConfig: v,
	}
}

// HttpSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns HttpSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func HttpSettingsConfigAsSecretProcessesorOutputConfigSettings(v *HttpSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		HttpSettingsConfig: v,
	}
}

// NextGenSiemSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns NextGenSiemSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func NextGenSiemSettingsConfigAsSecretProcessesorOutputConfigSettings(v *NextGenSiemSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		NextGenSiemSettingsConfig: v,
	}
}

// ObjectStorageSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns ObjectStorageSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func ObjectStorageSettingsConfigAsSecretProcessesorOutputConfigSettings(v *ObjectStorageSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		ObjectStorageSettingsConfig: v,
	}
}

// OpensearchSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns OpensearchSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func OpensearchSettingsConfigAsSecretProcessesorOutputConfigSettings(v *OpensearchSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		OpensearchSettingsConfig: v,
	}
}

// PagerdutySettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns PagerdutySettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func PagerdutySettingsConfigAsSecretProcessesorOutputConfigSettings(v *PagerdutySettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		PagerdutySettingsConfig: v,
	}
}

// PostgresqlSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns PostgresqlSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func PostgresqlSettingsConfigAsSecretProcessesorOutputConfigSettings(v *PostgresqlSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		PostgresqlSettingsConfig: v,
	}
}

// S3SettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns S3SettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func S3SettingsConfigAsSecretProcessesorOutputConfigSettings(v *S3SettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		S3SettingsConfig: v,
	}
}

// SecurityLakeSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns SecurityLakeSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func SecurityLakeSettingsConfigAsSecretProcessesorOutputConfigSettings(v *SecurityLakeSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		SecurityLakeSettingsConfig: v,
	}
}

// SentinelSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns SentinelSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func SentinelSettingsConfigAsSecretProcessesorOutputConfigSettings(v *SentinelSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		SentinelSettingsConfig: v,
	}
}

// SnowflakeOutputSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns SnowflakeOutputSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func SnowflakeOutputSettingsConfigAsSecretProcessesorOutputConfigSettings(v *SnowflakeOutputSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		SnowflakeOutputSettingsConfig: v,
	}
}

// SplunkSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns SplunkSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func SplunkSettingsConfigAsSecretProcessesorOutputConfigSettings(v *SplunkSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		SplunkSettingsConfig: v,
	}
}

// SumologicSettingsConfigAsSecretProcessesorOutputConfigSettings is a convenience function that returns SumologicSettingsConfig wrapped in SecretProcessesorOutputConfigSettings
func SumologicSettingsConfigAsSecretProcessesorOutputConfigSettings(v *SumologicSettingsConfig) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		SumologicSettingsConfig: v,
	}
}

// map[string]interface{}AsSecretProcessesorOutputConfigSettings is a convenience function that returns map[string]interface{} wrapped in SecretProcessesorOutputConfigSettings
func MapmapOfStringAnyAsSecretProcessesorOutputConfigSettings(v *map[string]interface{}) SecretProcessesorOutputConfigSettings {
	return SecretProcessesorOutputConfigSettings{
		MapmapOfStringAny: v,
	}
}


// Unmarshal JSON data into one of the pointers in the struct
func (dst *SecretProcessesorOutputConfigSettings) UnmarshalJSON(data []byte) error {
	var err error
	match := 0
	// try to unmarshal data into AbsSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.AbsSettingsConfig)
	if err == nil {
		jsonAbsSettingsConfig, _ := json.Marshal(dst.AbsSettingsConfig)
		if string(jsonAbsSettingsConfig) == "{}" { // empty struct
			dst.AbsSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.AbsSettingsConfig); err != nil {
				dst.AbsSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.AbsSettingsConfig = nil
	}

	// try to unmarshal data into AwssqsoutputSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.AwssqsoutputSettingsConfig)
	if err == nil {
		jsonAwssqsoutputSettingsConfig, _ := json.Marshal(dst.AwssqsoutputSettingsConfig)
		if string(jsonAwssqsoutputSettingsConfig) == "{}" { // empty struct
			dst.AwssqsoutputSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.AwssqsoutputSettingsConfig); err != nil {
				dst.AwssqsoutputSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.AwssqsoutputSettingsConfig = nil
	}

	// try to unmarshal data into BigquerySettingsConfig
	err = newStrictDecoder(data).Decode(&dst.BigquerySettingsConfig)
	if err == nil {
		jsonBigquerySettingsConfig, _ := json.Marshal(dst.BigquerySettingsConfig)
		if string(jsonBigquerySettingsConfig) == "{}" { // empty struct
			dst.BigquerySettingsConfig = nil
		} else {
			if err = validator.Validate(dst.BigquerySettingsConfig); err != nil {
				dst.BigquerySettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.BigquerySettingsConfig = nil
	}

	// try to unmarshal data into CriblHttpSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.CriblHttpSettingsConfig)
	if err == nil {
		jsonCriblHttpSettingsConfig, _ := json.Marshal(dst.CriblHttpSettingsConfig)
		if string(jsonCriblHttpSettingsConfig) == "{}" { // empty struct
			dst.CriblHttpSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.CriblHttpSettingsConfig); err != nil {
				dst.CriblHttpSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.CriblHttpSettingsConfig = nil
	}

	// try to unmarshal data into ElasticsearchSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.ElasticsearchSettingsConfig)
	if err == nil {
		jsonElasticsearchSettingsConfig, _ := json.Marshal(dst.ElasticsearchSettingsConfig)
		if string(jsonElasticsearchSettingsConfig) == "{}" { // empty struct
			dst.ElasticsearchSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.ElasticsearchSettingsConfig); err != nil {
				dst.ElasticsearchSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.ElasticsearchSettingsConfig = nil
	}

	// try to unmarshal data into GoogleCloudStorageOutputSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.GoogleCloudStorageOutputSettingsConfig)
	if err == nil {
		jsonGoogleCloudStorageOutputSettingsConfig, _ := json.Marshal(dst.GoogleCloudStorageOutputSettingsConfig)
		if string(jsonGoogleCloudStorageOutputSettingsConfig) == "{}" { // empty struct
			dst.GoogleCloudStorageOutputSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.GoogleCloudStorageOutputSettingsConfig); err != nil {
				dst.GoogleCloudStorageOutputSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.GoogleCloudStorageOutputSettingsConfig = nil
	}

	// try to unmarshal data into HttpSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.HttpSettingsConfig)
	if err == nil {
		jsonHttpSettingsConfig, _ := json.Marshal(dst.HttpSettingsConfig)
		if string(jsonHttpSettingsConfig) == "{}" { // empty struct
			dst.HttpSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.HttpSettingsConfig); err != nil {
				dst.HttpSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.HttpSettingsConfig = nil
	}

	// try to unmarshal data into NextGenSiemSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.NextGenSiemSettingsConfig)
	if err == nil {
		jsonNextGenSiemSettingsConfig, _ := json.Marshal(dst.NextGenSiemSettingsConfig)
		if string(jsonNextGenSiemSettingsConfig) == "{}" { // empty struct
			dst.NextGenSiemSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.NextGenSiemSettingsConfig); err != nil {
				dst.NextGenSiemSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.NextGenSiemSettingsConfig = nil
	}

	// try to unmarshal data into ObjectStorageSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.ObjectStorageSettingsConfig)
	if err == nil {
		jsonObjectStorageSettingsConfig, _ := json.Marshal(dst.ObjectStorageSettingsConfig)
		if string(jsonObjectStorageSettingsConfig) == "{}" { // empty struct
			dst.ObjectStorageSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.ObjectStorageSettingsConfig); err != nil {
				dst.ObjectStorageSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.ObjectStorageSettingsConfig = nil
	}

	// try to unmarshal data into OpensearchSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.OpensearchSettingsConfig)
	if err == nil {
		jsonOpensearchSettingsConfig, _ := json.Marshal(dst.OpensearchSettingsConfig)
		if string(jsonOpensearchSettingsConfig) == "{}" { // empty struct
			dst.OpensearchSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.OpensearchSettingsConfig); err != nil {
				dst.OpensearchSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.OpensearchSettingsConfig = nil
	}

	// try to unmarshal data into PagerdutySettingsConfig
	err = newStrictDecoder(data).Decode(&dst.PagerdutySettingsConfig)
	if err == nil {
		jsonPagerdutySettingsConfig, _ := json.Marshal(dst.PagerdutySettingsConfig)
		if string(jsonPagerdutySettingsConfig) == "{}" { // empty struct
			dst.PagerdutySettingsConfig = nil
		} else {
			if err = validator.Validate(dst.PagerdutySettingsConfig); err != nil {
				dst.PagerdutySettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.PagerdutySettingsConfig = nil
	}

	// try to unmarshal data into PostgresqlSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.PostgresqlSettingsConfig)
	if err == nil {
		jsonPostgresqlSettingsConfig, _ := json.Marshal(dst.PostgresqlSettingsConfig)
		if string(jsonPostgresqlSettingsConfig) == "{}" { // empty struct
			dst.PostgresqlSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.PostgresqlSettingsConfig); err != nil {
				dst.PostgresqlSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.PostgresqlSettingsConfig = nil
	}

	// try to unmarshal data into S3SettingsConfig
	err = newStrictDecoder(data).Decode(&dst.S3SettingsConfig)
	if err == nil {
		jsonS3SettingsConfig, _ := json.Marshal(dst.S3SettingsConfig)
		if string(jsonS3SettingsConfig) == "{}" { // empty struct
			dst.S3SettingsConfig = nil
		} else {
			if err = validator.Validate(dst.S3SettingsConfig); err != nil {
				dst.S3SettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.S3SettingsConfig = nil
	}

	// try to unmarshal data into SecurityLakeSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.SecurityLakeSettingsConfig)
	if err == nil {
		jsonSecurityLakeSettingsConfig, _ := json.Marshal(dst.SecurityLakeSettingsConfig)
		if string(jsonSecurityLakeSettingsConfig) == "{}" { // empty struct
			dst.SecurityLakeSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.SecurityLakeSettingsConfig); err != nil {
				dst.SecurityLakeSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.SecurityLakeSettingsConfig = nil
	}

	// try to unmarshal data into SentinelSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.SentinelSettingsConfig)
	if err == nil {
		jsonSentinelSettingsConfig, _ := json.Marshal(dst.SentinelSettingsConfig)
		if string(jsonSentinelSettingsConfig) == "{}" { // empty struct
			dst.SentinelSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.SentinelSettingsConfig); err != nil {
				dst.SentinelSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.SentinelSettingsConfig = nil
	}

	// try to unmarshal data into SnowflakeOutputSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.SnowflakeOutputSettingsConfig)
	if err == nil {
		jsonSnowflakeOutputSettingsConfig, _ := json.Marshal(dst.SnowflakeOutputSettingsConfig)
		if string(jsonSnowflakeOutputSettingsConfig) == "{}" { // empty struct
			dst.SnowflakeOutputSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.SnowflakeOutputSettingsConfig); err != nil {
				dst.SnowflakeOutputSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.SnowflakeOutputSettingsConfig = nil
	}

	// try to unmarshal data into SplunkSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.SplunkSettingsConfig)
	if err == nil {
		jsonSplunkSettingsConfig, _ := json.Marshal(dst.SplunkSettingsConfig)
		if string(jsonSplunkSettingsConfig) == "{}" { // empty struct
			dst.SplunkSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.SplunkSettingsConfig); err != nil {
				dst.SplunkSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.SplunkSettingsConfig = nil
	}

	// try to unmarshal data into SumologicSettingsConfig
	err = newStrictDecoder(data).Decode(&dst.SumologicSettingsConfig)
	if err == nil {
		jsonSumologicSettingsConfig, _ := json.Marshal(dst.SumologicSettingsConfig)
		if string(jsonSumologicSettingsConfig) == "{}" { // empty struct
			dst.SumologicSettingsConfig = nil
		} else {
			if err = validator.Validate(dst.SumologicSettingsConfig); err != nil {
				dst.SumologicSettingsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.SumologicSettingsConfig = nil
	}

	// try to unmarshal data into MapmapOfStringAny
	err = newStrictDecoder(data).Decode(&dst.MapmapOfStringAny)
	if err == nil {
		jsonMapmapOfStringAny, _ := json.Marshal(dst.MapmapOfStringAny)
		if string(jsonMapmapOfStringAny) == "{}" { // empty struct
			dst.MapmapOfStringAny = nil
		} else {
			if err = validator.Validate(dst.MapmapOfStringAny); err != nil {
				dst.MapmapOfStringAny = nil
			} else {
				match++
			}
		}
	} else {
		dst.MapmapOfStringAny = nil
	}

	if match > 1 { // more than 1 match
		// reset to nil
		dst.AbsSettingsConfig = nil
		dst.AwssqsoutputSettingsConfig = nil
		dst.BigquerySettingsConfig = nil
		dst.CriblHttpSettingsConfig = nil
		dst.ElasticsearchSettingsConfig = nil
		dst.GoogleCloudStorageOutputSettingsConfig = nil
		dst.HttpSettingsConfig = nil
		dst.NextGenSiemSettingsConfig = nil
		dst.ObjectStorageSettingsConfig = nil
		dst.OpensearchSettingsConfig = nil
		dst.PagerdutySettingsConfig = nil
		dst.PostgresqlSettingsConfig = nil
		dst.S3SettingsConfig = nil
		dst.SecurityLakeSettingsConfig = nil
		dst.SentinelSettingsConfig = nil
		dst.SnowflakeOutputSettingsConfig = nil
		dst.SplunkSettingsConfig = nil
		dst.SumologicSettingsConfig = nil
		dst.MapmapOfStringAny = nil

		return fmt.Errorf("data matches more than one schema in oneOf(SecretProcessesorOutputConfigSettings)")
	} else if match == 1 {
		return nil // exactly one match
	} else { // no match
		return fmt.Errorf("data failed to match schemas in oneOf(SecretProcessesorOutputConfigSettings)")
	}
}

// Marshal data from the first non-nil pointers in the struct to JSON
func (src SecretProcessesorOutputConfigSettings) MarshalJSON() ([]byte, error) {
	if src.AbsSettingsConfig != nil {
		return json.Marshal(&src.AbsSettingsConfig)
	}

	if src.AwssqsoutputSettingsConfig != nil {
		return json.Marshal(&src.AwssqsoutputSettingsConfig)
	}

	if src.BigquerySettingsConfig != nil {
		return json.Marshal(&src.BigquerySettingsConfig)
	}

	if src.CriblHttpSettingsConfig != nil {
		return json.Marshal(&src.CriblHttpSettingsConfig)
	}

	if src.ElasticsearchSettingsConfig != nil {
		return json.Marshal(&src.ElasticsearchSettingsConfig)
	}

	if src.GoogleCloudStorageOutputSettingsConfig != nil {
		return json.Marshal(&src.GoogleCloudStorageOutputSettingsConfig)
	}

	if src.HttpSettingsConfig != nil {
		return json.Marshal(&src.HttpSettingsConfig)
	}

	if src.NextGenSiemSettingsConfig != nil {
		return json.Marshal(&src.NextGenSiemSettingsConfig)
	}

	if src.ObjectStorageSettingsConfig != nil {
		return json.Marshal(&src.ObjectStorageSettingsConfig)
	}

	if src.OpensearchSettingsConfig != nil {
		return json.Marshal(&src.OpensearchSettingsConfig)
	}

	if src.PagerdutySettingsConfig != nil {
		return json.Marshal(&src.PagerdutySettingsConfig)
	}

	if src.PostgresqlSettingsConfig != nil {
		return json.Marshal(&src.PostgresqlSettingsConfig)
	}

	if src.S3SettingsConfig != nil {
		return json.Marshal(&src.S3SettingsConfig)
	}

	if src.SecurityLakeSettingsConfig != nil {
		return json.Marshal(&src.SecurityLakeSettingsConfig)
	}

	if src.SentinelSettingsConfig != nil {
		return json.Marshal(&src.SentinelSettingsConfig)
	}

	if src.SnowflakeOutputSettingsConfig != nil {
		return json.Marshal(&src.SnowflakeOutputSettingsConfig)
	}

	if src.SplunkSettingsConfig != nil {
		return json.Marshal(&src.SplunkSettingsConfig)
	}

	if src.SumologicSettingsConfig != nil {
		return json.Marshal(&src.SumologicSettingsConfig)
	}

	if src.MapmapOfStringAny != nil {
		return json.Marshal(&src.MapmapOfStringAny)
	}

	return nil, nil // no data in oneOf schemas
}

// Get the actual instance
func (obj *SecretProcessesorOutputConfigSettings) GetActualInstance() (interface{}) {
	if obj == nil {
		return nil
	}
	if obj.AbsSettingsConfig != nil {
		return obj.AbsSettingsConfig
	}

	if obj.AwssqsoutputSettingsConfig != nil {
		return obj.AwssqsoutputSettingsConfig
	}

	if obj.BigquerySettingsConfig != nil {
		return obj.BigquerySettingsConfig
	}

	if obj.CriblHttpSettingsConfig != nil {
		return obj.CriblHttpSettingsConfig
	}

	if obj.ElasticsearchSettingsConfig != nil {
		return obj.ElasticsearchSettingsConfig
	}

	if obj.GoogleCloudStorageOutputSettingsConfig != nil {
		return obj.GoogleCloudStorageOutputSettingsConfig
	}

	if obj.HttpSettingsConfig != nil {
		return obj.HttpSettingsConfig
	}

	if obj.NextGenSiemSettingsConfig != nil {
		return obj.NextGenSiemSettingsConfig
	}

	if obj.ObjectStorageSettingsConfig != nil {
		return obj.ObjectStorageSettingsConfig
	}

	if obj.OpensearchSettingsConfig != nil {
		return obj.OpensearchSettingsConfig
	}

	if obj.PagerdutySettingsConfig != nil {
		return obj.PagerdutySettingsConfig
	}

	if obj.PostgresqlSettingsConfig != nil {
		return obj.PostgresqlSettingsConfig
	}

	if obj.S3SettingsConfig != nil {
		return obj.S3SettingsConfig
	}

	if obj.SecurityLakeSettingsConfig != nil {
		return obj.SecurityLakeSettingsConfig
	}

	if obj.SentinelSettingsConfig != nil {
		return obj.SentinelSettingsConfig
	}

	if obj.SnowflakeOutputSettingsConfig != nil {
		return obj.SnowflakeOutputSettingsConfig
	}

	if obj.SplunkSettingsConfig != nil {
		return obj.SplunkSettingsConfig
	}

	if obj.SumologicSettingsConfig != nil {
		return obj.SumologicSettingsConfig
	}

	if obj.MapmapOfStringAny != nil {
		return obj.MapmapOfStringAny
	}

	// all schemas are nil
	return nil
}

// Get the actual instance value
func (obj SecretProcessesorOutputConfigSettings) GetActualInstanceValue() (interface{}) {
	if obj.AbsSettingsConfig != nil {
		return *obj.AbsSettingsConfig
	}

	if obj.AwssqsoutputSettingsConfig != nil {
		return *obj.AwssqsoutputSettingsConfig
	}

	if obj.BigquerySettingsConfig != nil {
		return *obj.BigquerySettingsConfig
	}

	if obj.CriblHttpSettingsConfig != nil {
		return *obj.CriblHttpSettingsConfig
	}

	if obj.ElasticsearchSettingsConfig != nil {
		return *obj.ElasticsearchSettingsConfig
	}

	if obj.GoogleCloudStorageOutputSettingsConfig != nil {
		return *obj.GoogleCloudStorageOutputSettingsConfig
	}

	if obj.HttpSettingsConfig != nil {
		return *obj.HttpSettingsConfig
	}

	if obj.NextGenSiemSettingsConfig != nil {
		return *obj.NextGenSiemSettingsConfig
	}

	if obj.ObjectStorageSettingsConfig != nil {
		return *obj.ObjectStorageSettingsConfig
	}

	if obj.OpensearchSettingsConfig != nil {
		return *obj.OpensearchSettingsConfig
	}

	if obj.PagerdutySettingsConfig != nil {
		return *obj.PagerdutySettingsConfig
	}

	if obj.PostgresqlSettingsConfig != nil {
		return *obj.PostgresqlSettingsConfig
	}

	if obj.S3SettingsConfig != nil {
		return *obj.S3SettingsConfig
	}

	if obj.SecurityLakeSettingsConfig != nil {
		return *obj.SecurityLakeSettingsConfig
	}

	if obj.SentinelSettingsConfig != nil {
		return *obj.SentinelSettingsConfig
	}

	if obj.SnowflakeOutputSettingsConfig != nil {
		return *obj.SnowflakeOutputSettingsConfig
	}

	if obj.SplunkSettingsConfig != nil {
		return *obj.SplunkSettingsConfig
	}

	if obj.SumologicSettingsConfig != nil {
		return *obj.SumologicSettingsConfig
	}

	if obj.MapmapOfStringAny != nil {
		return *obj.MapmapOfStringAny
	}

	// all schemas are nil
	return nil
}

type NullableSecretProcessesorOutputConfigSettings struct {
	value *SecretProcessesorOutputConfigSettings
	isSet bool
}

func (v NullableSecretProcessesorOutputConfigSettings) Get() *SecretProcessesorOutputConfigSettings {
	return v.value
}

func (v *NullableSecretProcessesorOutputConfigSettings) Set(val *SecretProcessesorOutputConfigSettings) {
	v.value = val
	v.isSet = true
}

func (v NullableSecretProcessesorOutputConfigSettings) IsSet() bool {
	return v.isSet
}

func (v *NullableSecretProcessesorOutputConfigSettings) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSecretProcessesorOutputConfigSettings(val *SecretProcessesorOutputConfigSettings) *NullableSecretProcessesorOutputConfigSettings {
	return &NullableSecretProcessesorOutputConfigSettings{value: val, isSet: true}
}

func (v NullableSecretProcessesorOutputConfigSettings) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSecretProcessesorOutputConfigSettings) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


