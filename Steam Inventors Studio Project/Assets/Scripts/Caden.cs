using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Caden : MonoBehaviour
{

    private Rigidbody rb3d;
    public float speed;
    private Camera c;
    void Start()
    {
        rb3d = GetComponent<Rigidbody>();
        c = FindObjectOfType<Camera>();
    }

    void Update()
    {
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");
        rb3d.AddForce(new Vector3(moveVertical, 0, -moveHorizontal));

        Vector3 dir = new Vector3(1, 50, 3);
        
        //transform.position - c.transform.position;
        dir.Normalize();

        Ray r = c.ScreenPointToRay(Input.mousePosition);
        RaycastHit rh;

        if (Physics.Raycast(r, out rh, 50))
        {
            print(rh.point);
        }
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        
        
        /*
        if (Input.GetKey(KeyCode.W))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(1, 0, 0);
        }
        if (Input.GetKey(KeyCode.S))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(-1, 0, 0);
        }
        if (Input.GetKey(KeyCode.A))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, 0, 1);
        }
        if (Input.GetKey(KeyCode.D))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, 0, -1);
        }
        if (Input.GetKey(KeyCode.E))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, 1, 0);
        }
        if (Input.GetKey(KeyCode.Q))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, -1, 0);
        }*/
    }
}
