# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.models_organization_list import ModelsOrganizationList

class TestModelsOrganizationList(unittest.TestCase):
    """ModelsOrganizationList unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ModelsOrganizationList:
        """Test ModelsOrganizationList
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ModelsOrganizationList`
        """
        model = ModelsOrganizationList()
        if include_optional:
            return ModelsOrganizationList(
                organizations = [
                    monad.models.models/organization.models.Organization(
                        created_at = '', 
                        description = '', 
                        id = '', 
                        name = '', 
                        updated_at = '', )
                    ],
                pagination = monad.models.models/pagination.models.Pagination(
                    limit = 56, 
                    offset = 56, 
                    total = 56, )
            )
        else:
            return ModelsOrganizationList(
        )
        """

    def testModelsOrganizationList(self):
        """Test ModelsOrganizationList"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
