# coding: utf-8

"""
    Monad API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.kms_settings_config import KmsSettingsConfig

class TestKmsSettingsConfig(unittest.TestCase):
    """KmsSettingsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> KmsSettingsConfig:
        """Test KmsSettingsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `KmsSettingsConfig`
        """
        model = KmsSettingsConfig()
        if include_optional:
            return KmsSettingsConfig(
                cron = '',
                kms_type = '',
                region = '',
                role_arn = ''
            )
        else:
            return KmsSettingsConfig(
        )
        """

    def testKmsSettingsConfig(self):
        """Test KmsSettingsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
