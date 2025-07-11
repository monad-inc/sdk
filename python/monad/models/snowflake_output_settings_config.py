# coding: utf-8

"""
    Monad API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from monad.models.batch_config_batch_config import BatchConfigBatchConfig
from typing import Optional, Set
from typing_extensions import Self

class SnowflakeOutputSettingsConfig(BaseModel):
    """
    Snowflake Output Settings
    """ # noqa: E501
    account: Optional[StrictStr] = Field(default=None, description="The unique identifier for your Snowflake account, typically in the form of 'organization-account_name'.")
    auth_type: Optional[StrictStr] = None
    batch_config: Optional[BatchConfigBatchConfig] = None
    case_insensitivity: Optional[StrictBool] = Field(default=None, description="Treat column names as case-insensitive (convert to uppercase) to match Snowflake's default behavior.")
    database: Optional[StrictStr] = Field(default=None, description="The name of the Snowflake database to connect to and perform operations on")
    role: Optional[StrictStr] = Field(default=None, description="The name of the Role your service account was granted which can access your resources.")
    var_schema: Optional[StrictStr] = Field(default=None, description="The schema within the Snowflake database where the target table resides.", alias="schema")
    stage: Optional[StrictStr] = Field(default=None, description="The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage.")
    table: Optional[StrictStr] = Field(default=None, description="The name of the table in Snowflake where the data will be written. If the table doesn't exist Monad will create the table.")
    user: Optional[StrictStr] = Field(default=None, description="The username of the Snowflake account used to establish the connection.")
    warehouse: Optional[StrictStr] = Field(default=None, description="The Snowflake virtual warehouse to use for executing queries and processing data.")
    __properties: ClassVar[List[str]] = ["account", "auth_type", "batch_config", "case_insensitivity", "database", "role", "schema", "stage", "table", "user", "warehouse"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of SnowflakeOutputSettingsConfig from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of batch_config
        if self.batch_config:
            _dict['batch_config'] = self.batch_config.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of SnowflakeOutputSettingsConfig from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "account": obj.get("account"),
            "auth_type": obj.get("auth_type"),
            "batch_config": BatchConfigBatchConfig.from_dict(obj["batch_config"]) if obj.get("batch_config") is not None else None,
            "case_insensitivity": obj.get("case_insensitivity"),
            "database": obj.get("database"),
            "role": obj.get("role"),
            "schema": obj.get("schema"),
            "stage": obj.get("stage"),
            "table": obj.get("table"),
            "user": obj.get("user"),
            "warehouse": obj.get("warehouse")
        })
        return _obj


