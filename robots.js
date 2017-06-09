<?xml version="1.0"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" targetNamespace="jcburnside.github.io" xmlns="https://www.w3schools.com" elementFormDefault="qualified">
<xs:group name="robot">

    <xs:sequence>
        <xs:element type="xs:string" name="name"/>
	<xs:element type="xs:string" name="description"/>
	<xs:element type="xs:string" name="imgPath"/>
	<xs:element type="xs:decimal" name="price"/>
	<xs:element type="xs:string" name="tags"/>
     </xs:sequence>
 </xs:group>

	<xs:element name="robots">
		<xs:group ref="robot"/>
	</xs:element>
</xs:schema>