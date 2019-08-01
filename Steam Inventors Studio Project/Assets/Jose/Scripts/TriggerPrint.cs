using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerPrint : MonoBehaviour
{
    //bool triggerOn = false;
    public Collider collideObj;
    //public GameObject player;
    public GameObject eventPoint;
    /*Vector3 m_playerPos;
   Vector3 m_pointPos;*/
    public float scaleMulti;
    /*float scaleX; 
    float scaleY;
    float scaleZ;
    float scaleModX;
    float scaleModY;
    float scaleModZ;*/

    // Start is called before the first frame update
    void Start()
    {
        /*get collider component
        collideObj = GetComponent<Collider>();
        m_playerPos = player.transform.position;
        m_pointPos = eventPoint.transform.position;
        scaleX = eventPoint.transform.localScale.x;
        scaleY = eventPoint.transform.localScale.y;
        scaleZ = eventPoint.transform.localScale.z;*/
    }

    // Update is called once per frame
    void Update()
    {
       /* if(m_playerPos.x - eventPoint.transform.x =< xDistToPoint || m_playerPos.z < zDistToPoint)
        {
            //(x*scalemulti, y*scalemulti, z*scalemulti)
        }
        else if(m_playerPos.x > xDistToPoint && m_playerPos.z > zDistToPoint)
        {
            //divide scale values by scalemulti
        }
       //compare float values to current position*/
      
    }
    private void OnTriggerEnter(Collider collideObj)
    {
        print("trigger on");
        eventPoint.transform.localScale = eventPoint.transform.localScale * scaleMulti;
        //eventPoint.transform.localPosition.y;
       //adjust y position
    }

    private void OnTriggerExit(Collider collideObj)
    {
        print("trigger off");
        eventPoint.transform.localScale = eventPoint.transform.localScale / scaleMulti;
       // eventPoint.transform.position = Vector3.down;
        //adjust y position
    }
}
